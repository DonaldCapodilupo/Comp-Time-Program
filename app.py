from flask import Flask, redirect, request, render_template, url_for
import json, csv, sqlite3
from Backend import program_Setup_On_Startup
from markupsafe import escape
import datetime
import pandas as pd

app = Flask(__name__)


@app.route('/', methods=["POST", "GET"])
def main_Menu():
    if request.method == "POST":
        button_clicked = request.form['submit_button']
        redirect_dict = {
            "View Available Comp Time": "view_Comp_Time",
            "Request Comp Time": "request_Comp_Time",
            "Manage Comp Time": "manage_Comp_Time"

        }

        buttons_that_require_input = ["View Available Comp Time", ]

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

        data = read_All_CSVs_Return_Employee(employee)
        data.to_html(open('templates/Account_History.html', 'w'), index=False, classes="table table-sm table-dark")

        with open('templates/Account_History.html', 'r') as infp:
            new_data = infp.read()

        return render_template("View Comp Time.html", employee_name=escape(employee), total_data=new_data)


@app.route('/Request-Comp-Time', methods=["POST", "GET"])
def request_Comp_Time():
    if request.method == "POST":
        from Backend import create_JSON_Personal_File, create_CSV_Row
        data_dict = request.form.to_dict()
        print(data_dict)
        # Append to Pending.csv

        today = str(datetime.date.today()).replace("-", "/")

        create_CSV_Row("History/Pending.csv",
                       [today, data_dict["Name"], data_dict["Current Hours Available"], data_dict["Hours Requested"],
                        data_dict["Week Ending Date"].replace("-", "/")])

        return redirect(url_for("main_Menu", confirmation="Comp Time Requested Submitted"))


    else:
        with open('static/Employee List.json') as json_file:
            employee_dict = json.load(json_file)
        with open('static/Current Banked Hours.json') as json_file:
            current_banked_hours = json.load(json_file)
        starting_hour = list(current_banked_hours.values())[0]
        return render_template("Request Comp Time.html", employees=employee_dict, banked_hours=current_banked_hours,
                               starting_hour=starting_hour)


@app.route('/Manage', methods=["POST", "GET"])
def manage_Comp_Time():
    if request.method == "POST":
        from Backend import manage_Comp_Time
        # If request is approved, remove from pending.csv, add to approved.csv
        # Update "Current Banked Hours.json
        managerial_decisions = request.form.to_dict()
        manage_Comp_Time(managerial_decisions)

        return redirect(url_for("main_Menu"))
    else:
        from Backend import read_One_Specific_CSV

        pending_requests = read_One_Specific_CSV(
            "History/Pending.csv")  # .to_html(index=False, classes="table table-sm table-dark")

        decision_row = []
        for employee_name in pending_requests["Employee"]:
            decision_row.append(
                '<input type="radio" class="btn-check" value="'+ employee_name +' Approved" name="' + employee_name +'" id="' + employee_name + ' Approved" autocomplete="off"><label class="btn btn-outline-success" for="' + employee_name + ' Approved">Approve</label><input type="radio" class="btn-check" value="'+ employee_name +' Denied" name="' + employee_name +'" id="' + employee_name + ' Denied" autocomplete="off"><label class="btn btn-outline-danger" for="' + employee_name + ' Denied">Deny</label>'
                )

            # '<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked><label class="btn btn-outline-success" for="success-outlined">Checked success radio</label><input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"><label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>'] * \

        pending_requests["Decision"] = pd.Series(decision_row)

        return render_template("Manage Comp Time.html", pending_requests=pending_requests.to_html(index=False,
                                                                                                  classes="table text text-center table-sm table-dark",
                                                                                                  escape=False))


start = program_Setup_On_Startup()

if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True)
