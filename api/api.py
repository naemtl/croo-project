from flask import Flask

app = Flask(__name__)


@app.route("/api", methods=["GET"])
def index():
    return {"name": "We're live!"}


if __name__ == "__main__":
    app.run(debug=True)
