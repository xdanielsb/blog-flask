from flask import Flask, render_template

#!/usr/bin/python
__author__ = "Daniel Fernando Santos Bustos"
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Daniel Santos"
__email__ = "dfsantosbu@unal.edu.co"
__status__ = "Development"

app = Flask(__name__)
app.config['DEBUG'] = False

@app.route('/')
def index():
    return render_template('index.html')

if __name__ =="__main__":
    app.run(debug=True)
