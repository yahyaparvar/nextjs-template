from flask import jsonify
from pocketbase import PocketBase

pb = PocketBase('http://127.0.0.1:8090')


def create_user(username, email, password):
    data = {
        "email": email,
        "password": password,
        "username": username,
        "curr_xp": 0,
        "target_xp": 5,
        # technically user-records should be a different table
        "records": {"bench press:": 0, "barbell squat": 0, "deadlift": 0},
        "num_workouts": 0
    }

    try:
        user = pb.collection("users").create(data)
        return {'message': f'User {data["username"]} created successfully with ID {user["id"]}'}, 200 
    except Exception as e:
        print(f"Error creating user: {str(e)}")  # Print the error to the console for debugging
        return {'error': str(e)}, 500

