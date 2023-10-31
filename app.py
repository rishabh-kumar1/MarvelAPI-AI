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
    for character in data:
        entities = named_entity_recognition(character['description'])
        sentiments = []


        for entity in entities:
            sentiment = sentiment_analysis(entity)
            sentiments.append(sentiment)


        # Count the occurrences of each sentiment
        sentiment_counts = {
            'Hero': sentiments.count('positive'),
            'Villain': sentiments.count('negative'),
            'Neutral': sentiments.count('neutral')
        }


        # Get the sentiment with the highest count
        max_sentiment = max(sentiment_counts, key=sentiment_counts.get)
        character['sentiment'] = max_sentiment


    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
