from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy
from textblob import TextBlob


app = Flask(__name__)
CORS(app)

# Load SpaCy NER model
nlp = spacy.load("en_core_web_sm")


def named_entity_recognition(text):
    doc = nlp(text)
    entities = [ent.text for ent in doc.ents if ent.label_ == "PERSON"]
    return entities


def sentiment_analysis(text):
    analysis = TextBlob(text)
    sentiment = "positive" if analysis.sentiment.polarity > 0 else "negative" if analysis.sentiment.polarity < 0 else "neutral"
    return sentiment

@app.route("/classify", methods=["POST"])
def computeClassifications():
    data = request.json
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
