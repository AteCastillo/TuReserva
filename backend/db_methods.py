#!/usr/bin/python3
from models import ModelManager
from os import getcwd
import json
import MySQLdb
from uuid import uuid4
"""Method to manage Information in the database"""

class DBManager:
    __tables = {'Users':'user_id', 'Partners': 'partner_id', 
                'Categories': 'category_id', 'Services':'service_id',
                'Orders':'order_id', 'Reviews':'review_id'}
    __development = 'db_config'
    __testing = 'db_test_config'
    __db_config = '{}/.{}.json'.format(getcwd(), __testing)

    
    def create_connection(self):
        """Function that is in charge of create the
        connection with the database"""
        configurations = {}
        with open(self.__db_config, 'r') as f:
            configurations = json.load(f)
        conn = MySQLdb.connect(host=configurations['host'], 
                               port=configurations['port'],
                               user=configurations['user'], 
                               passwd=configurations['passwd'],
                               db=configurations['db'],
                               charset=configurations['charset'])
        return conn
    
    def close_connection(self, conn, cur):
        """Close the connection and the cursor"""
        cur.close()
        conn.close()

    def insert_register(self, table, values):
        """Insert a register in table (table) with values 
        (values - a tuple with values to insert)
        Return a dictionary with the values and keys inserted
        or None if failed"""
        model = ModelManager(table)
        register = {}
        conn = self.create_connection()
        cur = conn.cursor()
        id = str(uuid4())
        new_values = []
        new_values.append(id)
        new_values += values
        new_values = tuple(new_values)
        sentence = "INSERT INTO `{}` VALUES {};".format(table, new_values)
        try:
            cur.execute(sentence)
            conn.commit()
            self.close_connection(conn, cur)
            for index, key in enumerate(model.values):
                register[key] = new_values[index]
            return register
        except:
            self.close_connection(conn, cur)
            return None

    def delete_register(self, table, id):
        """Delete a register in table (table) with the id (id)"""
        sentence = "DELETE FROM `{}` WHERE {}={};".format(
                   table, self.__tables[table], id)
        conn = self.create_connection()
        cur = conn.cursor()
        try:
            cur.execute(sentence)
            return True
        except:
            return False
    
    def update_register(self, table, values, id):
        """Update a register in table (table)
        with values (values - a dictionary with values to edit) 
        with the id (id)"""
        string = ''
        count = 1
        for key, value in values.items():
            string += "{}=".format(key)
            if type(value) == str:
                string += '\'{}\''.format(value)
            else:
                string += str(value)
            if count < len(values):
                string += ", "
            count += 1
        sentence = "UPDATE `{}` SET {} WHERE {}={};".format(
                   table, string, self.__tables[table], id)
        return sentence

    def select_all_register(self, table, id):
        """Select all from a table(table) with the id(id)"""
        sentence = "SELECT * FROM `{}` WHERE `{}`=\'{}\'".format(
                   table, self.__tables[table], id)
        register = {}
        model = DBManager(table)
        conn = self.create_connection()
        cur = conn.cursor()
        cur.execute(sentence)
        query_rows = cur.fetchone()
        for index, elem in enumerate(model.values):
            register[elem] = query_rows[index]
        return register

