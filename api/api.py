from flask import Flask, jsonify
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


@app.route("/api", methods=["GET"])
def index():
    return jsonify([*map(comment_serializer, Comment.query.all())])


if __name__ == "__main__":
    app.run(debug=True)
