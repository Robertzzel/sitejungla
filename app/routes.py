from flask import render_template , request, redirect, url_for
from app import app


@app.route('/',methods=['POST','GET'])
def home():
    if request.method == "GET":
        return render_template('start.html')
    elif request.method=="POST":
        return redirect(url_for('start'))


@app.route('/start',methods=['POST','GET'])
def start():
    if request.method == "GET":
        return render_template('actiune.html')
