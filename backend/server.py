from flask import Flask, jsonify
from flask_cors import CORS
from pocketbase import PocketBase
from user import create_user
# import PocketBase from 'pocketbase';

app = Flask(__name__)
CORS(app)

pb = PocketBase('http://127.0.0.1:8090')

@app.route("/")
def home():
    return "Hello, World!"

@app.route("/api/hello")
def api_hello():
    return jsonify({"message": "Hello, World"})

@app.route("/api/createUser", methods=["POST"])
def create_user_route():
    email = 'abcd'
    password = 'blah@gmail.com'
    
    if not username or not email:
        return jsonify({'error': 'Missing username or email'}), 400

    response, status_code = create_user(username, email)
    return jsonify(response), status_code

# @app.route('clans/add_member', methods=['POST'])
# def add_member_to_clan():
#     data = request.get_json()
#     member_id = data['member_id']
#     clan_id = data['clan_id']

#     sendNewMember(member_id, clan_id)

#     return jsonify({'message': 'New member added to clan successfully'})

if __name__ == "__main__":
    app.run(debug=True)