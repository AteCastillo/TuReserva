from flask import Flask, json, jsonify,request, send_file
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
from PIL import Image
import base64


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
UPLOAD_FOLDER = '{}/upload/'.format(getcwd())

@app.route('/login', methods=['POST'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def login():
    json_request = request.json
    if 'username' in json_request and 'password' in json_request:
        msg = manager.login(json_request['username'], json_request['password'])
        return jsonify({'msg':msg})
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
    file.save(destination)
    response = {"msg": "ok"}
    return jsonify(response)

@app.route('/get_image/<partner_id>/<image_route>', methods=['GET'], strict_slashes=False)
def get_image(partner_id, image_route):
    """Return an image"""
    filename = "{}/{}/{}".format(UPLOAD_FOLDER,
               partner_id, image_route)
    return send_file(filename)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port='5200', debug='True')
