import os
from os.path import join, dirname
from dotenv import load_dotenv

from flask import Flask, request, jsonify
from datetime import datetime
import pymongo
from pymongo import MongoClient
from dotenv import load_dotenv
from datetime import datetime
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager

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

app.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
jwt = JWTManager(app)

@app.route("/signup", methods=['POST'])
def signup():
    try:    
        body = request.json
        username = body['username']
        password = body['password']
        email = body['email']

        if not body or not username or not password:
            return {
                "message": "Please provide user details",
                "data": None,
                "error": "Bad request"
            }, 400
        
        user = dbname['accounts'].find_one({'username': username})
        print(user)
        if user:
            return {
                "message": "username already exists",
                "data": None,
                "error": "Conflict"
            }, 409
        
        createTime = datetime.now().strftime("%H:%M:%S")
        userObj = {'username': username, 'password': password, 'email': email, 'createdAt': createTime, 'updatedAt': createTime}
        dbname['accounts'].insert_one(userObj)
        return body
    except Exception as e:
        print(e)
        return e


@app.route('/login', methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    
    user = dbname['accounts'].find_one({'username': username, 'password': password})
    if user is None:
        return {"msg": "Wrong username or password"}, 401

    access_token = create_access_token(identity=username)
    response = {"access_token":access_token}
    return response

@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response
        
if __name__ == "__main__":    
    app.debug = True
    app.run()


