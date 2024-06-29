from flask import jsonify
from pocketbase import PocketBase

pb = PocketBase('http://127.0.0.1:8090')

def create_clan(userName, clanName):
    data = {
        "name": clanName,
        "members": [userName],
        "curr_xp": 0,
        "target_xp": 10,
    }
    try:
        # Check if the clan name already exists
        existing_clan = pb.collection("clans").get_first_list_item(f'name="{clanName}"')
        
        if existing_clan:
            return {'error': 'Clan name already taken'}, 400
        
        # Create the new clan
        new_clan = pb.collection("clans").create(data)
        return {'message': f'Clan {name} created successfully with ID {new_clan["id"]}'}, 200
    except Exception as e:
        return {'error': str(e)}, 500

def add_member_to_clan(userName, clanName):
    try:
        user = pb.collection("users").get_first_list_item(f'username="{userName}"')
        if not user:
            return {'error': 'User not found'}, 404
        clan = pb.collection("clans").get_first_list_item(f'name="{clanName}"')
        if not clan:
            return {'error': 'Clan not found'}, 404
        members = clan.get('members', [])
        if user['id'] in members:
            return {'error': 'User is already a member of the clan'}, 400

        members.append(user['id'])
        updated_clan = pb.collection("clans").update(clan['id'], {'members': members})
        
        return {'message': f'User {userName} added to clan {clanName} successfully'}, 200
    except Exception as e:
        return {'error': str(e)}, 500

def levelUp(add_xp, clanName):
    clan = pb.collection("clans").get_first_list_item(f'name="{clanName}"')
    if not clan:
      return {'error': 'Clan not found'}, 404
    
    # Calculate new XP
    new_xp = clan['xp'] + add_xp
    
    if new_xp >= clan['target_xp']:
        # Call the reward function
        reward_clan(clan['id'])
        
        # Update XP and target XP
        new_target_xp = clan['target_xp'] * 1.5
        pb.collection("clans").update(clan['id'], {'xp': new_xp, 'target_xp': new_target_xp})
    else:
        # Just update the XP
        pb.collection("clans").update(clan['id'], {'xp': new_xp})
    
    return {'message': f'Clan {clanName} updated successfully'}, 200
