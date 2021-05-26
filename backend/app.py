from flask import Flask, json, jsonify,request
from flask_cors import CORS, cross_origin
from db_methods import DBManager
from models import ModelManager

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
manager = DBManager()

@app.route('/register', methods=['POST'])
@cross_origin(supports_credentials=True)
def register():
    json = request.json
    if 'name' not in json.keys():
        return jsonify('bad request'), 403
    return jsonify(json)

"""User Methods"""

@app.route('/users', methods=['POST'], strict_slashes=False)
def users_post():
    """Create a user"""
    values = []
    user_values = ModelManager('Users').values
    user_values.pop(0)
    json_request = request.json
    json_request['cash'] = 0
    #Check for existence of all keys in a dict
    if all(k in json_request for k in user_values):
        for elem in user_values:
            values.append(json_request[elem])
        register = manager.insert_register('Users', values)
        return jsonify(register)
    else:
        return "Miss some value"
    

@app.route('/users/<user_id>', methods=['GET'])
def users_get(user_id):
    """Return Information about User"""
    user = manager.select_all_register('Users', user_id)
    if user is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(user)

@app.route('/users/<user_id>', methods=['DELETE'])
def users_delete(user_id):
    """Delete an User"""
    delete = manager.delete_register('User', user_id)
    if delete == False:
        return jsonify({'fail':'fail'}), 402
    return jsonify({'Ok':'OK'}), 200

@app.route('/users/<user_id>', methods=['DELETE'])
def users_update(user_id):
    updated = manager.update_register('Users', request.json, user_id)
    if updated == False:
        return jsonify({'error':'error'}), 402
    return jsonify({'todo':'ok'}), 200

"""Partner Methods"""


if __name__ == '__main__':
    app.run(host='127.0.0.1', port='5200', debug='True')

