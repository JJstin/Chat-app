from flask import Flask

app = Flask(__name__)

# login API Route

@app.route("/login")
def login():
    return {"login info": ["username: 3", "password: 4"]}

if __name__ == "__main__":
    app.run(debug=True)