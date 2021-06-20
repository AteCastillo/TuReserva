import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from os import getenv

def send_mail_signup(user_name, user_email):
	"""This function send an email when a account
	is created"""
	msg = MIMEMultipart()
	email = 'tureservamvp@gmail.com'
	password = getenv('PASSWORD_TR')
	msg = MIMEText(
	'Hello, {}!\n\nYour account was created successfully.\n\n Thank\
you for being part of TuReserva!\n\nTuReserva Team'.format(user_name))
	msg['Subject'] = 'TuReserva Account'
	msg['From'] = 'TuReserva'
	msg['To'] = user_name
	server = smtplib.SMTP('smtp.gmail.com:587')
	server.starttls()
	server.ehlo()
	server.login(email, password)
	server.sendmail('TuReserva', user_email, msg.as_string())
	server.quit()
	
def send_mail_reserve(user_name, user_email, partner_name, services, reserve_date, reserve_hour, reserve_price, reserve_pay):
	"""This function send an email when a
	reservation is realized"""
	msg_user = MIMEMultipart()
	msg_partner = MIMEMultipart()
	email = 'tureservamvp@gmail.com'
	password = getenv('PASSWORD_TR')
	services_name = ""
	for service in services:
		services_name += "\t{}\n".format(service)
	msg_user = MIMEText('Hello, {}!\n\nYour reservation with {} is confirmed for {} at {}.\n\n\
The reserved services are: \n{}\n\The reserve total price is ${}. A down \
payment of ${} has been debited from your account\
for the booking of the reserve.\n\n \
Thank you for being part of TuReserva!\n\nTuReserva Team'.format(
	user_name,  partner_name, reserve_date, reserve_hour,
	reserve_price, reserve_pay, services))
	msg_partner = MIMEText('Hello, {}!\n\nYou have a reservation confirmed with {}\
for {} at {}.\n\nthe reserved services are: \n{}The reserve\n\
total price is ${}. A down payment of ${} has been acredited \
in your account for the booking of the reserve.\n\n \
Thank you for being part of TuReserva!\n\nTuReserva Team'.format(
	user_name,  partner_name, reserve_date, reserve_hour,
	reserve_price, reserve_pay, services))
	msg_user['Subject'] = 'reserve(s) Booked'
	msg_user['From'] = 'TuReserva'
	msg_user['To'] = user_name

	server = smtplib.SMTP('smtp.gmail.com:587')
	server.starttls()
	server.ehlo()
	server.login(email, password)
	server.sendmail('TuReserva', user_email, msg_user.as_string())
	server.sendmail('TuReserva', user_email, msg_partner.as_string())

	server.quit()
