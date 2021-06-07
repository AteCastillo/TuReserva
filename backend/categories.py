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

# Get all partners of a category

@category.route('/categories/<category_id>')
@swag_from('documentation/partners/all_partners.yml')
def all_partners(category_id):
    """Return all partners information"""
    fields = ('id', 'name', 'description','address', 'phone')
    all_partners = manager.select_partner_categories('Partners',
    'Categories', category_id, fields)
    return jsonify(all_partners)
