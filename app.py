from flask import Flask, render_template
app = Flask(__name__)
@app.route("/")
# def main():
#
#     app.run()
# app.run()
def index():
    return render_template('index.html')
    # return 'index.html'
if __name__ == "__main__":
   main()
