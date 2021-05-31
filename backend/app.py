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


"""     USER METHODS        """

# User SignUp
@app.route('/users', methods=['POST'], strict_slashes=False)
def user_signup():
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
def user_get(user_id):
    """Return Information about User"""
    user = manager.select_register_id('Users', user_id)
    if user is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(user)


"""     PARTNER METHODS     """

# Partner SignUp
@app.route('/partners/<category_id>', methods=['POST'],
           strict_slashes=False)
def partner_signup(category_id):
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

@app.route('/partners/<partner_id>', methods=['GET'],
           strict_slashes=False)
def partner_get(partner_id):
    """Return Information about Partner"""
    partner = manager.select_register_id('Partners', partner_id)
    if partner is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(partner)

@app.route('/partners', methods=['GET'])
def all_partners():
    """Return all partners information"""
    all_partners = manager.select_all_registers('Partners')
    return jsonify(all_partners)


"""         SERVICES METHODS        """

# Create Service
@app.route('/services/<partner_id>', methods=['POST'],
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
@app.route('/services/<service_id>', methods=['GET'],
           strict_slashes=False)
def service_get(service_id):
    """Return Information about a service"""
    service = manager.select_register_id('Services', service_id)
    if service is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(service)

# Delete Service
@app.route('/services/<service_id>', methods=['DELETE'],
           strict_slashes=False )
def service_delete(service_id):
    """Delete a service"""
    res = manager.delete_register('Services', service_id)
    if res == False:
        return ("Something wrong\n"), 400
    else:
        return ("OK"), 200

# Update Service
@app.route('/services/<service_id>', methods=['PUT'],
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


"""         REVIEWS METHODS     """

# Create a Review
@app.route('/reviews/<user_id>/<partner_id>', methods=['POST'],
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
@app.route('/reviews/<partner_id>', methods=['GET'],
           strict_slashes=False)
def review_get(partner_id):
    """Return All reviews of a partner
    in format {element:[{review 1}, {review 2}]}"""
    reviews = manager.select_all_for('Reviews', 'Partners', partner_id)
    if reviews is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(reviews)

# Delete a Review
@app.route('/reviews/<review_id>', methods=['DELETE'],
           strict_slashes=False)
def review_delete(review_id):
    """This function delete a review<review_id>"""
    res = manager.delete_register('Reviews', review_id)
    if res == False:
        return ("Something wrong\n"), 400
    else:
        return ("OK"), 200

# Update a Review
@app.route('/reviews/<review_id>', methods=['PUT'],
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


"""         ORDER METHODS          """

# Create an Order
@app.route('/orders/<user_id>/<partner_id>', methods=['POST'],
           strict_slashes=False)
def order_create(user_id, partner_id):
    """Create a Review"""
    values = []
    user_values = ModelManager('Orders').values
    user_values.pop(0)
    # DateTime format is YYYY-MM-DD HH-MM-SS
    json_request = request.json
    json_request['user_id'] = user_id
    json_request['partner_id'] = partner_id
    #Check for existence of all keys in a dict
    if all(k in json_request for k in user_values):
        for elem in user_values:
            values.append(json_request[elem])
        register = manager.insert_register('Orders', values)
        res = manager.create_orders_services(
            register['id'], json_request['services'])
        if res == False:
            return "Something wrong"
        return jsonify("OK"), 200
    else:
        return "Miss some value"

# Get an Order
@app.route('/orders/<order_id>', methods=['GET'])
def orders_get(order_id):
    """Return Information about an Order"""
    order = manager.select_register_id('Orders', order_id)
    if order is None:
        return jsonify({'fail':'fail'}), 402
    return jsonify(order)

# Delete an order
@app.route('/orders/<order_id>', methods=['DELETE'],
           strict_slashes=False)
def order_delete(order_id):
    """This function delete an order <order_id>"""
    res = manager.delete_register('Orders', order_id)
    if res == False:
        return ("Something wrong\n"), 400
    else:
        return ("OK"), 200


"""         CATEGORY METHODS        """

# Get all categories
@app.route('/categories', methods=['GET'])
def all_categories():
    """Return all categories information"""
    all_categories = manager.select_all_registers('Categories')
    return jsonify(all_categories)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port='5200', debug='True')
