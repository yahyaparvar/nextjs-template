from flask import Flask, jsonify, request
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


@app.route("/api/create_user", methods=["POST"])
def create_user_route():
    data = request.get_json()
    email = data["email"]
    password = data["password"]
    username = data["username"]

    if not password or not email or password:
        return jsonify({'error': 'Missing password or email or username'}), 400

    response, status_code = create_user(username, email, password)
    return jsonify(response), status_code


@app.route("/api/create_clan", methods=["POST"])
def create_user_route():
    data = request.get_json()
    clan_name = data["clan_name"]
    username = data["username"]
    if not password or not email or password:
        return jsonify({'error': 'Missing password or email or username'}), 400

    response, status_code = create_user(username, email, password)
    return jsonify(response), status_code


@app.route('/clans/add_member', methods=['POST'])
def add_member_to_clan():
    data = request.get_json()
    userName = data['username']
    clanName = data['clan_name']

    if not userName or not clanName:
        return jsonify({'error': 'Missing username or clan name'}), 400

    response, status_code = add_member_to_clan(userName, clanName)
    return jsonify(response), status_code


if __name__ == "__main__":
    app.run(debug=True)