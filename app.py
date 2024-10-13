from flask import Flask, request, jsonify
from flask_cors import CORS
import arxiv
import requests
from bs4 import BeautifulSoup
import os

app = Flask(__name__)
CORS(app)

# ... rest of the code remains the same

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)