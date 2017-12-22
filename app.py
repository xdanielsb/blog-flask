#!/usr/bin/python

from flask import Flask, render_template
from constant import constants
import random
import urllib3
import json

__author__ = "Daniel Fernando Santos Bustos"
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Daniel Santos"
__email__ = "dfsantosbu@unal.edu.co"
__status__ = "Development"

app=Flask(__name__)
app.secret_key = '15%&*^&^GJHYTDT24623/*@!@#G@JH$%+9'


def getRandomColors( n = 30 ):
    colors = []
    for i in range(n):
        r = lambda: random.randint(0,200)
        color = '#%02X%02X%02X' % (r(),r(),r())
        colors.append(color)
    return colors

@app.route('/')
def index():
    url  = constants["urlUsers"]
    http = urllib3.PoolManager()
    response = http.request('GET', url)
    dat = response.data.decode('utf-8')
    result = json.loads(dat)
    colors = getRandomColors()
    return render_template('index.html', users=result, colors= colors)

if __name__ =="__main__":
    getRandomColors(10)
    app.run(host='0.0.0.0')
