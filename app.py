from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy
from textblob import TextBlob


app = Flask(__name__)
CORS(app)


@app.route("/classify", methods=["POST"])
def computeClassifications():
    data = request.json
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
