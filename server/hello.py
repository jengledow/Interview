from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.post('/login')
def login():
	print(request.form)
	return "this is a response"