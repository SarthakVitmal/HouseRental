from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def Project():
    return render_template('Project.html')

@app.route('/api/data')
def get_data():
    data = {"message": "Data from the backend"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)