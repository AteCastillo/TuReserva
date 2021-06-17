import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from os import getenv

def send_mail_signup (user_name, user_email):
	msg = MIMEMultipart()
	email = 'tureservamvp@gmail.com'
	password = getenv('PASSWORD_TR')
	msg = MIMEText('Hello, {}!\n\nYour account was created successfully.\n\n\
	Thank you for being part of TuReserva!\n\nTuReserva Team'.format(user_name))
	msg['Subject'] = 'TuReserva Account'
	msg['From'] = 'TuReserva'
	msg['To'] = user_name

	server = smtplib.SMTP('smtp.gmail.com:587')
	server.starttls()
	server.ehlo()
	server.login(email, password)
	server.sendmail('TuReserva', user_email, msg.as_string())
	server.quit()
	
def send_mail_reserve (user_name, user_email, partner_name, service_name, service_date, service_hour, service_price, service_pay):
	msg = MIMEMultipart()
	email = 'tureservamvp@gmail.com'
	password = getenv('PASSWORD_TR')
	msg = MIMEText('Hello, {}!\n\nYour reservation for {} with {} is confirmed for {} at {}.\n\nThe service(s) \
total price is ${}. A down payment of ${} has been debited from your account for the booking of the service(s).\n\n\
Thank you for being part of TuReserva!\n\nTuReserva Team'.format(user_name, service_name, partner_name, service_date, service_hour, \
	service_price, service_pay))
	msg['Subject'] = 'Service(s) Booked'
	msg['From'] = 'TuReserva'
	msg['To'] = user_name

	server = smtplib.SMTP('smtp.gmail.com:587')
	server.starttls()
	server.ehlo()
	server.login(email, password)
	server.sendmail('TuReserva', user_email, msg.as_string())
	server.quit()

#send_mail_signup ('parbilla', 'parbilla@gmail.com')
send_mail_reserve ('parbilla', 'parbilla@gmail.com', 'Tucutucu', 'Laundry', '10/10/21', '9:00', '750', '75')