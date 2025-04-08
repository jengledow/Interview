import sqlite3

connection = sqlite3.connect('interview_db.db')

with open('tables.sql') as f:
	connection.executescript(f.read())

connection.commit()
connection.close()