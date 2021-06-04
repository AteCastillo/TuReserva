from db_methods import DBManager
from models import ModelManager
from flasgger.utils import swag_from
from flask import Blueprint, jsonify, request

partner = Blueprint('partner', __name__)
manager = DBManager()

# Partner SignUp
@partner.route('/partners', methods=['POST'],
           strict_slashes=False)
@swag_from('documentation/partners/post_partner.yml')
def partner_signup():
    """Create a partner and return a dictionary
    with the values of it"""
    values = []
    user_values = ModelManager('Partners').values
    user_values.pop(0)
    json_request = request.json
    json_request['wallet'] = 0
    #Check for existence of all keys in a dict
    if all(k in json_request for k in user_values):
        for elem in user_values:
            values.append(json_request[elem])
        register = manager.insert_register('Partners', values)
        if register is None:
            return jsonify({'msg':'Error'}), 403
        return jsonify({'msg':'OK'}), 201
    else:
        return jsonify({"msg":"Miss some value"}), 400

@partner.route('/partners/<partner_id>', methods=['GET'],
           strict_slashes=False)
@swag_from('documentation/partners/get_partner.yml')
def partner_get(partner_id):
    """Return Information about Partner"""
    fields = ('id', 'name', 'description','phone', 'address')
    partner = manager.select_register_id('Partners', partner_id, fields)
    if partner is None:
        return jsonify({'msg':'Not found'}), 404
    return jsonify(partner), 200
