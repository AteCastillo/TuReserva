from db_methods import DBManager
from models import ModelManager
from flasgger.utils import swag_from
from flask import Blueprint, jsonify, request

category = Blueprint('category', __name__)
manager = DBManager()

# Get all categories
@category.route('/categories')
@swag_from('documentation/categories/all_categories.yml')
def all_categories():
    """Return all categories information"""
    all_categories = manager.select_all_registers('Categories')
    return jsonify(all_categories)