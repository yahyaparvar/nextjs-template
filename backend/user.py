from flask import jsonify
from pocketbase import PocketBase

pb = PocketBase('http://127.0.0.1:8090')

def create_user(email, password):
    data = {
        "email": email,
        "password": password,
        "emailVisibility": True,
        "passwordConfirm": "12345678",
        "name": "test"
    }

    try:
        user = pb.collection("users").create(data)
        return {'message': f'User {data["username"]} created successfully with ID {user["id"]}'}, 200
    except Exception as e:
        print(f"Error creating user: {str(e)}")  # Print the error to the console for debugging
        return {'error': str(e)}, 500