from flask import Flask, jsonify
from flask_cors import CORS
from pocketbase import PocketBase
from user import create_user
from clan import create_clan
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
    username = 'blasd'
    email = 'abcd'
    password = 'blah@gmail.com'
    
    if not username or not email:
        return jsonify({'error': 'Missing username or email'}), 400

    response, status_code = create_user(username, email)
    return jsonify(response), status_code

@app.route("/api/createClan", methods=["POST"])
def create_user_route():
    email = 'abcd'
    password = 'blah@gmail.com'
    
    if not username or not email:
        return jsonify({'error': 'Missing username or email'}), 400

    response, status_code = create_user(username, email)
    return jsonify(response), status_code

@app.route('clans/add_member', methods=['POST'])
def add_member_to_clan():
    data = request.get_json()
    userName = data['username']
    clanName = data['clanname']

    if not userName or not clanName:
        return jsonify({'error': 'Missing username or clan name'}), 400

    response, status_code = add_member_to_clan(userName, clanName)
    return jsonify(response), status_code

if __name__ == "__main__":
    app.run(debug=True)