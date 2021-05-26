#!/bin/bash
sudo apt-get install nginx -y
sudo apt-get install mysql
pip3 install mysqldb
cat setup_mysql_db.sql | mysql -uroot -p12345678
git clone ...
python3 services/backend/app.py &&
cd services/frontend
yarn start &&