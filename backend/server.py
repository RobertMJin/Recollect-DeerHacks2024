"""Flask server for serving data to react"""
import datetime
from flask import Flask
 
# Initializing flask app
app = Flask(__name__)
 
# Getting current time
x = datetime.datetime.now()
 
 
# Route for seeing a data
@app.route('/data')
def get_time():
 
    # Returning an api for showing in  reactjs
    return {
        'Name': "geek", 
        "Age": "22",
        "Date": x, 
        "programming": "python"
        }
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)