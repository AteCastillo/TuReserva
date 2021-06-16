import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from os import getenv

def send_mail_signup (user_name, user_email):
	msg = MIMEMultipart()
	email = 'tureservamvp@gmail.com'
	password = getenv('PASSWORD_TR')
	msg = MIMEText('Hello, {}!\n\nYour account was created successfully.\n\nThanks for being part of TuReserva.com!\n\nTuReserva Team'.format(user_name))
	msg['Subject'] = 'TuReserva Account'
	msg['From'] = 'TuReserva'
	msg['To'] = user_name

	server = smtplib.SMTP('smtp.gmail.com:587')
	server.starttls()
	server.ehlo()
	server.login(email, password)
	server.sendmail('TuReserva', user_email, msg.as_string())
	server.quit()
	

send_mail_signup ('atecastillo', 'atecast@gmail.com')