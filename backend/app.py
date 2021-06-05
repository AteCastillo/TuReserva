from flask import Flask, json, jsonify,request
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
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['SWAGGER'] = {
    'title': 'AirBnB clone Restful API',
    'uiversion': 3
}
Swagger(app)
manager = DBManager()


@app.route('/login', methods=['POST'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def login():
    json_request = request.json
    if 'username' in json_request and 'password' in json_request:
        msg = manager.login(json_request['username'], json_request['password'])
        return jsonify({'msg':msg})
    return jsonify({'msg':'bad request'}), 403


@app.route('/upload', methods=['POST'], strict_slashes=False)
def upload_image():
    pass


if __name__ == '__main__':
    app.run(host='127.0.0.1', port='5200', debug='True')
