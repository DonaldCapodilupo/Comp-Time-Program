import os, csv, datetime

today = str(datetime.date.today())

def record_Request(form_dict):

    list_of_values = list(form_dict.values())
    list_of_values.extend(today)

    with open("Comp Time Ledger.csv", "a", newline="") as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(list_of_values)


def program_Setup_On_Startup():
    if "Comp Time Ledger.csv" not in os.listdir():
        with open("Comp Time Ledger.csv", "w", newline="") as csv_file:
            csv_writer = csv.writer(csv_file)

            csv_writer.writerow(
                ["Date", "Employee", "Current Comp Time Balance", "Time and a Half Hours Worked", "Double Time Worked",
                 "Compt Time Hours Requested", "Compt Time Hours Used", "Compt Time Available"])
            csv_file.close()
    else:
        print("present.")
