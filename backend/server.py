"""Flask server for serving data to react"""
import datetime
import os
from flask import Flask, request
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
 
# Initializing flask app
app = Flask(__name__)
CORS(app, supports_credentials=True)


# Getting current time
x = datetime.datetime.now()
 
@app.route('/api/upload', methods=['POST'])
@cross_origin(supports_credentials=True)
def upload_file():
    print("server received request")
    if request.method == 'POST':
        print("post request")
        video = request.files['video']
        video.save(os.path.join("./uploads", secure_filename(video.filename)))
        print(video)
        return 'video uploaded successfully'
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)