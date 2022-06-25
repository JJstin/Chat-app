import os
from os.path import join, dirname
from dotenv import load_dotenv

from flask import Flask, request
from datetime import datetime
import pymongo
from pymongo import MongoClient
from dotenv import load_dotenv

from flask import request


import json

def get_database():
    dotenv_path = join(dirname(__file__), '.env')
    load_dotenv(dotenv_path)    

    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = os.environ.get("SERVER_CONNECTION_STRING")
    # "mongodb+srv://justinshi:3fW61ONLirpGInoT@Cluster0.mongodb.net/test"
    

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    from pymongo import MongoClient
    client = MongoClient(CONNECTION_STRING)

    # Create the database for our example (we will use the same database throughout the tutorial
    return client['test']
    
# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":    
    
    # Get the database
    dbname = get_database()


app = Flask(__name__)
# login API Route

@app.route("/login")
def login():
    return {"login info": ["username: 3", "password: 4"]}

@app.route("/signup", methods=['POST'])
async def signup():
    username = request.form['username']
    password = request.form['password']
    if not username or not password:
        raise HttpException
    
    user = await dbname['users'].find_one(username = username)

    if user:
        # raise HttpException, duplicate username
        pass
    userobj = {'username': username, 'password': password}
    dbname['users'].insert_one(userobj)
        
    
    # username = body['username']
    # dbname['accounts'].insert_one({'username':username})
    return {"success": "success"}
        
if __name__ == "__main__":    
    app.debug = True
    app.run()


