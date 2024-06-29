from flask import Flask, jsonify, request
from flask_cors import CORS

from user import create_user
from clan import create_clan, join_clan, leave_clan, level_up as clan_level_up, clan_stats
from user import user_stats
from workout import start_workout, add_exercise_to_workout, save_workout_routine, add_set_to_workout

app = Flask(__name__)
CORS(app)

# pb = PocketBase('http://127.0.0.1:8090')


@app.route("/")
def home():
    return "Hello, World!"


@app.route("/api/hello")
def api_hello():
    return jsonify({"message": "Hello, World"})


@app.route("/user/create", methods=["POST"])
def create_user_route():
    data = request.get_json()
    print("Received data:", data)  # Log the received data for debugging purposes
    email = data["email"]
    password = data["password"]
    username = data["username"]

    if not password or not email or not username:
        return jsonify({'error': 'Missing password or email or username'}), 400

    response, status_code = create_user(username, email, password)
    return jsonify(response), status_code


@app.route("/api/user_level_up", methods=["POST"])
def user_level_up():
    data = request.get_json()
    username = data["email"]
    level = data["level"]
    # cbs error checking for now
    response, status_code = user_level_up(username, level)
    return jsonify(response), status_code


@app.route("/api/user_stats", methods=["GET"])
def user_stats():
    username = request.args.get('username')
    ret = user_stats(username)
    return jsonify(ret)


@app.route("/clan/create", methods=["POST"])
def create_clan_route():
    data = request.get_json()
    clan_name = data["clan_name"]
    username = data["username"]
    
    # if not password or not email or password:
    #     return jsonify({'error': 'Missing password or email or username'}), 400

    response, status_code = create_clan(username, clan_name)
    return jsonify(response), status_code


@app.route('/clan/join_clan', methods=['POST'])
def join_clan():
    data = request.get_json()
    username = data['username']
    clan_name = data['clan_name']

    if not username or not clan_name:
        return jsonify({'error': 'Missing username or clan name'}), 400

    response, status_code = join_clan(username, clan_name)
    return jsonify(response), status_code


@app.route('/clan/leave_clan', methods=['POST'])
def leave_clan():
    data = request.get_json()
    username = data['username']
    clan_name = data['clan_name']

    if not username or not clan_name:
        return jsonify({'error': 'Missing username or clan name'}), 400

    ret = leave_clan(username, clan_name)
    return jsonify(ret)


# potentially this isnt an actual endpoint:
# when a user levels up, it automatically goes towards clan points
@app.route('/clan/level_up', methods=['POST'])
def clan_level_up():
    data = request.get_json()
    add_xp = data['add_xp']
    clan_name = data['clan_name']

    if not add_xp or not clan_name:
        return jsonify({'error': 'Missing add_xp or clan name'}), 400

    ret = clan_level_up(add_xp, clan_name)
    return jsonify(ret)


@app.route("/clan/stats", methods=["GET"])
def clan_stats():
    clan_name = request.args.get('clan_name')
    ret = clan_stats(clan_name)
    return jsonify(ret)


@app.route("/clan/list_all", methods=["GET"])
def clan_list_all():
    pass
    # clan_name = request.args.get('clan_name')
    # ret = clan_stats(clan_name)
    # return jsonify(ret)


@app.route('/workout/start', methods=['POST'])
def start_workout():
    data = request.get_json()
    username = data['username']

    ret = start_workout(username)
    return jsonify(ret)


@app.route('/workout/add_exercise', methods=['POST'])
def add_exercise_to_workout():
    data = request.get_json()
    exercise = data['exercise']
    workout_id = data['workout_id']
    ret = add_exercise_to_workout(workout_id, exercise)
    return jsonify(ret)


# @app.route('/workout/save_workout_routine', methods=['POST'])
# def add_exercise_to_workout():
#     data = request.get_json()
#     workout_id = data['workout_id']
#     exercise_set = data['exercise_set']
#     weight = data['weight']
#     ret = add_set_to_workout(workout_id, exercise_set, weight)
#     return jsonify(ret)


# @app.route('/workout/save_workout_routine', methods=['POST'])
# def add_exercise_to_workout():
#     data = request.get_json()
#     workout_id = data['workout_id']
#     exercise_set = data['exercise_set']
#     weight = data['weight']
#     ret = add_set_to_workout(workout_id, exercise_set, weight)
#     return jsonify(ret)


if __name__ == "__main__":
    app.run(debug=True)