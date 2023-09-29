from flask import Flask, redirect, request, render_template, url_for
import json, csv, sqlite3
from Backend import program_Setup_On_Startup
from markupsafe import escape
app = Flask(__name__)


@app.route('/', methods=["POST", "GET"])
def main_Menu():
    if request.method == "POST":
        button_clicked = request.form['submit_button']
        redirect_dict = {
            "View Available Comp Time": "view_Comp_Time",
            "Request Comp Time": "request_Comp_Time",

        }

        buttons_that_require_input = ["View Available Comp Time",]

        employee = request.form["employee_name"]



        if button_clicked in buttons_that_require_input:
            return redirect(url_for(redirect_dict[button_clicked], employee=employee))
        else:
            return redirect(url_for(redirect_dict[button_clicked]))

    else:
        with open('static/Employee List.json') as json_file:
            employee_dict = json.load(json_file)
        return render_template("main.html", employees=employee_dict)




@app.route('/View-Profile/<string:employee>', methods=["POST", "GET"])
def view_Comp_Time(employee):
    if request.method == "POST":

        return redirect(url_for('main_Menu'))
    else:
        from Backend import read_All_CSVs_Return_Employee



        data = read_All_CSVs_Return_Employee(employee).to_html(open('templates/Account_History.html', 'w'), index=False, classes="table table-sm table-dark")


        return render_template("View Comp Time.html", employee_name = escape(employee), total_data = data)


@app.route('/Request-Comp-Time', methods=["POST", "GET"])
def request_Comp_Time():
    if request.method == "POST":
        from Backend import create_JSON_Personal_File
        data_dict = request.form.to_dict()

        create_JSON_Personal_File(data_dict)
        return redirect(url_for("main_Menu", confirmation="Comp Time Requested Submitted"))


    else:
        with open('static/Employee List.json') as json_file:
            employee_dict = json.load(json_file)
        with open('static/Current Banked Hours.json') as json_file:
            current_banked_hours = json.load(json_file)
        starting_hour = list(current_banked_hours.values())[0]
        return render_template("Request Comp Time.html", employees=employee_dict, banked_hours=current_banked_hours,
                               starting_hour=starting_hour)

start = program_Setup_On_Startup()


if __name__ == '__main__':
    app.run(debug=True)
