from db_methods import DBManager
from models import ModelManager
from flasgger.utils import swag_from
from flask import Blueprint, jsonify, request

review = Blueprint('review', __name__)
manager = DBManager()

# Create a Review
@review.route('/reviews/<user_id>/<partner_id>', methods=['POST'],
           strict_slashes=False)
def review_create(user_id, partner_id):
    """Create a Review"""
    values = []
    user_values = ModelManager('Reviews').values
    user_values.pop(0)
    # Year format is YYYY-MM-DD
    json_request = request.json
    json_request['user_id'] = user_id
    json_request['partner_id'] = partner_id
    #Check for existence of all keys in a dict
    if all(k in json_request for k in user_values):
        for elem in user_values:
            values.append(json_request[elem])
        register = manager.insert_register('Reviews', values)
        return jsonify(register)
    else:
        return "Miss some value"

# Show all reviews of a partner <partner_id>
@review.route('/reviews/<partner_id>', methods=['GET'],
           strict_slashes=False)
def review_get(partner_id):
    """Return All reviews of a partner
    in format {element:[{review 1}, {review 2}]}"""
    reviews = manager.select_all_for('Reviews', 'Partners', partner_id)
    if reviews is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(reviews)

# Delete a Review
@review.route('/reviews/<review_id>', methods=['DELETE'],
           strict_slashes=False)
def review_delete(review_id):
    """This function delete a review<review_id>"""
    res = manager.delete_register('Reviews', review_id)
    if res == False:
        return ("Something wrong\n"), 400
    else:
        return ("OK"), 200

# Update a Review
@review.route('/reviews/<review_id>', methods=['PUT'],
           strict_slashes=False )
def review_update(review_id):
    """Update the values of a Review"""
    values = []
    register = manager.select_register_id('Reviews', review_id)
    if register is None:
        return ("No register founded")
    service_values = ModelManager('Reviews').values
    json_request = request.json
    json_request['id'] = review_id
    json_request['user_id'] = register['user_id']
    json_request['partner_id'] = register['partner_id']
    #Check for existence of all keys in a dict
    if all(k in json_request for k in service_values):
        for elem in service_values:
            values.append(json_request[elem])
        register = manager.update_register('Reviews', review_id, values)
        return jsonify(register), 203
    else:
        return "Miss some value"