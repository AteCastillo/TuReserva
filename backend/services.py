from db_methods import DBManager
from models import ModelManager
from flasgger.utils import swag_from
from flask import Blueprint, jsonify, request

service = Blueprint('service', __name__)
manager = DBManager()

# Create Service
@service.route('/services/<partner_id>', methods=['POST'],
           strict_slashes=False)
def create_service(partner_id):
    """Method to create a service for a partner
    Returns a 203 response if it's created correctly
    else return an error"""
    values = []
    service_values = ModelManager('Services').values
    service_values.pop(0)
    json_request = request.json
    json_request['partner_id'] = partner_id
    #Check for existence of all keys in a dict
    if all(k in json_request for k in service_values):
        for elem in service_values:
            values.append(json_request[elem])
        register = manager.insert_register('Services', values)
        return jsonify(register), 203
    else:
        return "Miss some value"

# Get Service
@service.route('/services/<service_id>', methods=['GET'],
           strict_slashes=False)
def service_get(service_id):
    """Return Information about a service"""
    service = manager.select_register_id('Services', service_id)
    if service is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(service)

# Delete Service
@service.route('/services/<service_id>', methods=['DELETE'],
           strict_slashes=False )
def service_delete(service_id):
    """Delete a service"""
    res = manager.delete_register('Services', service_id)
    if res == False:
        return ("Something wrong\n"), 400
    else:
        return ("OK"), 200

# Update Service
@service.route('/services/<service_id>', methods=['PUT'],
           strict_slashes=False )
def service_update(service_id):
    """Update the values of a service"""
    values = []
    register = manager.select_register_id('Services', service_id)
    if register is None:
        return ("No register founded")
    service_values = ModelManager('Services').values
    json_request = request.json
    json_request['id'] = service_id
    json_request['partner_id'] = register['partner_id']
    #Check for existence of all keys in a dict
    if all(k in json_request for k in service_values):
        for elem in service_values:
            values.append(json_request[elem])
        register = manager.update_register('Services', service_id, values)
        return jsonify(register), 203
    else:
        return "Miss some value"
