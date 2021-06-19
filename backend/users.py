from db_methods import DBManager
from models import ModelManager
from flasgger.utils import swag_from
from flask import Blueprint, jsonify, request

user = Blueprint('user', __name__)
manager = DBManager()




# Get user info
@user.route('/users/<user_id>', methods=['GET'])
@swag_from('documentation/users/get_user.yml')
def user_get(user_id):
    """Return Information about User"""
    user = manager.select_register_id('Users', user_id)
    if user is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(user)