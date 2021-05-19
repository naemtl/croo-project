from flask import Flask, jsonify, json, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///crootest.db"
db = SQLAlchemy(app)


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    datetime = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, nullable=False)
    name = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f"{self.id} {self.content} {self.datetime} {self.email} {self.name}"


def comment_serializer(comment):
    return {
        "id": comment.id,
        "content": comment.content,
        "datetime": comment.datetime,
        "email": comment.email,
        "name": comment.name,
    }


@app.route("/comments", methods=["GET"])
def index():
    return jsonify([*map(comment_serializer, Comment.query.all())])


@app.route("/comments/create", methods=["POST"])
def create():
    request_data = json.loads(request.data)
    comment = Comment(
        content=request_data["content"],
        datetime=request_data["datetime"],
        email=request_data["email"],
        name=request_data["name"],
    )

    db.session.add(comment)
    db.session.commit()

    return {"201": "Comment created successfully!"}


if __name__ == "__main__":
    app.run(debug=True)
