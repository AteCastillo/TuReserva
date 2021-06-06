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

    def string_values(self, values):
        """Return an string like (%s, %s...)
        for values in the insert"""
        string = ''
        for i in range(len(values)):
            string += "%s"
            if i < len(values) - 1:
                string += ", "
        return string
    
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
        (values - a list with values to insert)
        Return a dictionary with the values and keys inserted
        or None if failed"""
        model = ModelManager(table)
        register = {}
        conn = self.create_connection()
        cur = conn.cursor()
        id = str(uuid4()) #if reg_id is None else reg_id
        new_values = []
        new_values.append(id)
        new_values += values
        new_values = tuple(new_values)
        string = self.string_values(new_values)
        sentence = "INSERT INTO `{}` VALUES ({});".format(table,string)
        try:
            cur.execute(sentence, new_values)
            conn.commit()
            self.close_connection(conn, cur)
            for index, key in enumerate(model.values):
                register[key] = new_values[index]
            return register
        except:
            self.close_connection(conn, cur)
            return None
    
    def update_register(self, table, reg_id, values):
        """Update an element if exists"""
        # Create connection
        conn = self.create_connection()
        cur = conn.cursor()
        # Delete the element
        del_sentence = "DELETE FROM `{}` WHERE `{}`=\'{}\';".format(
                    table, self.__tables[table], reg_id)
        # Create with new values 
        model = ModelManager(table)
        register = {}
        string = self.string_values(values)
        ins_sentence = "INSERT INTO `{}` VALUES ({});".format(table,string)
        print(ins_sentence)
        print(values)
        try:
            cur.execute(del_sentence)
            cur.execute(ins_sentence, values)
            conn.commit()
            self.close_connection(conn, cur)
            for index, key in enumerate(model.values):
                register[key] = values[index]
            return register
        except:
            self.close_connection(conn, cur)
            return None

    def delete_register(self, table, id):
        """Delete a register in table (table) with the id (id)
        Return True if was executed correctly else False"""
        sentence = "DELETE FROM `{}` WHERE `{}`=\'{}\';".format(
                   table, self.__tables[table], id)
        conn = self.create_connection()
        cur = conn.cursor()
        try:
            cur.execute(sentence)
            conn.commit()
            self.close_connection(conn, cur)
            return True
        except:
            self.close_connection(conn,cur)
            return False

    def select_register_id(self, table, id, fields=None):
        """Select all from a table(table) with the id(id)"""
        select_fields = "*" if fields is None else self.fields_corrector(table, fields)
        sentence = "SELECT {} FROM `{}` WHERE `{}`=\'{}\'".format(
                   select_fields,table, self.__tables[table], id)
        register = {}
        model = ModelManager(table)
        conn = self.create_connection()
        cur = conn.cursor()
        cur.execute(sentence)
        query_rows = cur.fetchone()
        if query_rows is None:
            return None
        if fields is None:
            for index, elem in enumerate(model.values):
                register[elem] = query_rows[index]
        else:
            for index, elem in enumerate(fields):
                register[elem] = query_rows[index]
        self.close_connection
        return register

    def select_all_registers(self, table, fields=None):
        """This Function recieves a name of a table (table)
        and returns all values in the format dict
        {elements:[{row1},{row2}]}"""
        select_fields = "*" if fields is None else self.fields_corrector(table, fields)
        sentence = "SELECT {} FROM `{}`;".format(select_fields, table)
        print(sentence)
        print(fields)
        values = []
        model = ModelManager(table)
        conn = self.create_connection()
        cur = conn.cursor()
        cur.execute(sentence)
        query_rows = cur.fetchall()
        if query_rows is None:
            return None
        for element in query_rows:
            row = {}
            if fields is None:
                for index, column in enumerate(model.values):
                    row[column] = element[index]
            else:
                for index, column in enumerate(fields):
                    row[column] = element[index]
            values.append(row)
        register = {"elements":values}
        self.close_connection(conn, cur)
        return register
    
    def select_all_for(self, table, for_table, id, fields=None):
        """This Function recieves a name of a table (table)
        and the table that connect with foreign key(for_table)
        with id (id)
        and returns all values in the format dict
        {elements:[{row1},{row2}]}"""
        select_fields = "*" if fields is None else self.fields_corrector(table, fields)
        sentence = "SELECT {} FROM `{}` WHERE `{}`=\'{}\';".format(
                    select_fields, table, self.__tables[for_table], id)
        values = []
      
        model = ModelManager(table)
        conn = self.create_connection()
        cur = conn.cursor()
        cur.execute(sentence)
        query_rows = cur.fetchall()
        if query_rows is None:
            return None
        for element in query_rows:
            row = {}
            if fields is None:
                for index, column in enumerate(model.values):
                    row[column] = element[index]
                values.append(row)
            else:
                for index, column in enumerate(fields):
                    row[column] = element[index]
            values.append(row)
        register = {"elements":values}
        self.close_connection(conn, cur)
        return register
    
    def create_orders_services(self, order_id, services):
        """Create all Order-services relationship
        Returns True if all was correct else False"""
        # Create connection to database
        conn = self.create_connection()
        cur = conn.cursor()
        try:
            for i in range(len(services)):
                sentence = "INSERT INTO `{}` VALUES (%s, %s);".format(
                    "Orders_Services")
                cur.execute(sentence, (order_id, services[i]))
            conn.commit()
            self.close_connection(conn, cur)
            return True
        except:
            self.close_connection(conn, cur)
            return False
    
    def login(self, username, password):
        """Comprobe if exists the user  in the database
        and if the password is correct return a token"""
        sentence = "SELECT * FROM `{}` WHERE `{}`=\'{}\'".format(
                   "Users", "user_username", username)
        # Create connection
        conn = self.create_connection()
        cur = conn.cursor()
        print(sentence)
        try:
            cur.execute(sentence)
            query_rows = cur.fetchone()
            if query_rows is None:
                return "Wrong Password"
            # Password in the database
            print('a')
            print(query_rows)
            db_pass = query_rows[2]
            if password == db_pass:
                return "Token"
        except:
            return "Something wrong"
        finally:
            self.close_connection(conn, cur)

    def fields_corrector(self, table, fields):
        """Convert fields passed for parameters in 
        correct fields for the database
        example: name -> partner_name"""
        tablename = table.lower()
        tablename = tablename[:-1]
        new_fields = []
        for elem in fields:
            new_fields.append("{}_{}".format(tablename, elem))
        return ", ".join(new_fields)

    def reviews_of_partner(self, partner_id):
        """Show relevant information about all reviews
        of a partner"""
        sentence = "SELECT (username, "
        return None
    
    def images_of_partner(self, partner_id):
        """Return a list with all images
        of the partner"""
        pass