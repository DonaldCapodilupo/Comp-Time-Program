from flask import Flask, redirect, request, render_template, url_for
import json, csv
from Backend import program_Setup_On_Startup

app = Flask(__name__)


@app.route('/', methods=["POST", "GET"])
def request_Comp_Time():
    if request.method == "POST":
        from Backend import record_Request
        form_data_dict = request.form

        record_Request(form_data_dict)

        print(request.form)
        return render_template("View Comp Time.html")
    else:
        with open('static/Employee List.json') as json_file:
            employee_dict = json.load(json_file)
        with open('static/Current Banked Hours.json') as json_file:
            current_banked_hours = json.load(json_file)
        starting_hour = list(current_banked_hours.values())[0]
        return render_template("View Comp Time.html", employees=employee_dict, banked_hours=current_banked_hours,
                               starting_hour=starting_hour)

start = program_Setup_On_Startup()


if __name__ == '__main__':
    app.run(debug=True)
