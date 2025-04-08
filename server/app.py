import bcrypt
import sqlite3
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def connect_db():
	conn = sqlite3.connect('interview_db.db')
	conn.row_factory = sqlite3.Row
	return conn

@app.post('/login')
def login():
	loginData = request.get_json()
	password = loginData["password"].encode()
	email = loginData["email"]

	conn = connect_db()
	user = conn.execute("SELECT * FROM users WHERE email = ?;", (email,)).fetchone()
	conn.close()

	if user is not None and bcrypt.checkpw(password, user['pswd']):
		return jsonify({
			'success': True
		})
	else:
		return jsonify({
			'success': False 
		})

@app.post('/register')
def register():
	userData = request.get_json()
	password = userData["password"].encode()
	email = userData["email"]
	data = {
		'success': False 
	}

	salt = bcrypt.gensalt()
	hash = bcrypt.hashpw(password, salt)

	conn = connect_db()
	conn.execute('INSERT INTO users (email, pswd) VALUES (?, ?)', (email, hash))

	try:
		conn.commit()
		data['success'] = True
	finally:
		conn.close()
		return jsonify(data)