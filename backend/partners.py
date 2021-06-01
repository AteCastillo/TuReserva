from db_methods import DBManager
from models import ModelManager
from flasgger.utils import swag_from
from flask import Blueprint, jsonify, request

partner = Blueprint('partner', __name__)
manager = DBManager()

# Partner SignUp
@partner.route('/partners/<category_id>', methods=['POST'],
           strict_slashes=False)
def partner_signup(category_id):
    """Create a partner and return a dictionary
    with the values of it"""
    values = []
    user_values = ModelManager('Partners').values
    user_values.pop(0)
    json_request = request.json
    json_request['wallet'] = 0
    json_request['category_id'] = category_id
    #Check for existence of all keys in a dict
    if all(k in json_request for k in user_values):
        for elem in user_values:
            values.append(json_request[elem])
        register = manager.insert_register('Partners', values)
        return jsonify(register)
    else:
        return "Miss some value"

@partner.route('/partners/<partner_id>', methods=['GET'],
           strict_slashes=False)
def partner_get(partner_id):
    """Return Information about Partner"""
    partner = manager.select_register_id('Partners', partner_id)
    if partner is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(partner)

@partner.route('/partners')
@swag_from('documentation/partners/all_partners.yml')
def all_partners():
    """Return all partners information"""
    fields = ('name', 'address', 'phone')
    all_partners = manager.select_all_registers('Partners', fields)
    return jsonify(all_partners)