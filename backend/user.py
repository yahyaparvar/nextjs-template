from flask import jsonify
from pocketbase import PocketBase

pb = PocketBase('http://127.0.0.1:8090')

async def create_user(username, email, password):
    data = {
        "username": "test_username",
        "email": "test@example.com",
        "emailVisibility": True,
        "password": "12345678",
        "passwordConfirm": "12345678",
        "name": "test",
        "pass": "test",
        "curr_xp": 123,
        "target_xp": 123
    }
    print("CREATING USER WITH THE DATA:", data)
 
    try:
        user = await pb.collection("users").create(data) 
        return {'message': f'User {data["username"]} created successfully with ID'}, 200 
    except Exception as e:
        print(f"Error creating user: {str(e)}")  # Print the error to the console for debugging
        return {'error': str(e)}, 500


def user_level_up(username, level):
    pass


def user_stats(username):
    pass
