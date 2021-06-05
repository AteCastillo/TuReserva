#!/usr/bin/python3
"""This class is in charge to save a list of values that are the
names of the columns of the table in the database"""


class ModelManager:

    def __init__(self, model):
        if model == 'Users':
            self.values = ['id', 'username',
                          'password', 'email',
                          'cash']
        elif model == 'Categories':
            self.values = ['id', 'name']
        elif model == 'Partners':
            self.values = ['id', 'name', 'description',
                          'address', 'phone',
                          'username', 'email',
                          'password', 'wallet',
                          'category_id']
        elif model == 'Services':
            self.values = ['id', 'name',
                          'description', 'price',
                          'time', 'partner_id']
        elif model == 'Orders':
            self.values = ['id', 'amount',
                          'date', 'user_id', 'partner_id']
        elif model == 'Reviews':
            self.values = ['id', 'description', 
                          'stars', 'date',
                          'user_id', 'partner_id']
        elif model == 'Orders_Services':
            self.values = ['order_id', 'service_id']