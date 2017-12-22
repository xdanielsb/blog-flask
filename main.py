#!/usr/bin/python

from flask import Flask, render_template
from constant import constants
import random
import urllib2
import json

__author__ = "Daniel Fernando Santos Bustos"
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Daniel Santos"
__email__ = "dfsantosbu@unal.edu.co"
__status__ = "Development"

app = Flask(__name__)
app.config['DEBUG'] = False


def getRandomColors( n = 30 ):
    colors = []
    for i in range(n):
        r = lambda: random.randint(0,255)
        color = '#%02X%02X%02X' % (r(),r(),r())
        colors.append(color)
    return colors

@app.route('/')
def index():
    url  = constants["urlUsers"]
    data = urllib2.urlopen(url)
    result = json.load(data)
    colors = getRandomColors()
    return render_template('index.html', users=result, colors= colors)

if __name__ =="__main__":
    getRandomColors(10)
    app.run(debug=True)
