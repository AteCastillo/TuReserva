from flask import Flask, jsonify,request, send_file
from flask_cors import CORS, cross_origin
from flasgger import Swagger
from db_methods import DBManager
from models import ModelManager
from flasgger.utils import swag_from
from partners import partner
from users import user
from services import service
from reviews import review
from orders import order
from categories import category
from os import getcwd, mkdir, path
from werkzeug.utils import secure_filename


app = Flask(__name__)
app.register_blueprint(partner)
app.register_blueprint(user)
app.register_blueprint(service)
app.register_blueprint(review)
app.register_blueprint(order)
app.register_blueprint(category)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy,,dog'
app.config['SWAGGER'] = {
    'title': 'TuReserva Restful API',
    'uiversion': 3
}
Swagger(app)
manager = DBManager()
#key = Fernet.generate_key()
#fernet = Fernet(key)
UPLOAD_FOLDER = '{}/upload/'.format(getcwd())

@app.route('/login', methods=['POST'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def login():
    json_request = request.json
    if ('username' in json_request and 'password' in json_request):
        #json_request['password'] = manager.encrypt_password(json_request['password'], fernet)
        print(json_request)
        token, user = manager.login(json_request['username'], json_request['password'])
        return jsonify({'msg':token, 'user':user})
    return jsonify({'msg':'bad request'}), 403


@app.route('/upload/<partner_id>', methods=['POST'], strict_slashes=False)
def upload_image(partner_id):
    """In charge of upload images to folder upload"""
    target=path.join(UPLOAD_FOLDER, partner_id)
    # If not exists this folder create it
    if not path.isdir(target):
        mkdir(target)
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    destination="/".join([target, filename])
    print(destination)
    file.save(destination)
    response = {}
    return jsonify("{}/{}/{}".format(
        "http://127.0.0.1:5200/get_image", partner_id, filename
    ))

@app.route('/get_image/<partner_id>/<image_route>', methods=['GET'], strict_slashes=False)
def get_image(partner_id, image_route):
    """Return an image"""
    filename = "{}/{}/{}".format(UPLOAD_FOLDER,
               partner_id, image_route)
    return send_file(filename)

# User SignUp
@app.route('/users', methods=['POST'], strict_slashes=False)
@swag_from('documentation/users/post_user.yml')
def user_signup():
    """Create a user"""
    values = []
    user_values = ModelManager('Users').values
    user_values.pop(0)
    json_request = request.json
    json_request['cash'] = 0
    #Check for existence of all keys in a dict
    if all(k in json_request for k in user_values):
        #json_request['password'] = manager.encrypt_password(json_request['password'], fernet)
        for elem in user_values:
            values.append(json_request[elem])
        register = manager.insert_register('Users', values)
        if register is None:
            return jsonify({'msg':'Error'}), 403
        #send_mail_signup(json_request['username'], json_request['email'])
        return jsonify({'msg':'OK', 'user':register['id']}), 201
    else:
        return jsonify({"msg":"Miss some value"}), 400

if __name__ == '__main__':
    app.run(host='127.0.0.1', port='5200', debug='True')
