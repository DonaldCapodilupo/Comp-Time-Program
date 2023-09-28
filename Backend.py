import os, csv, datetime, sqlite3
import pandas as pd

today = str(datetime.date.today())


def record_Request(form_dict):
    list_of_values = list(form_dict.values())
    list_of_values.insert(0, today)

    with open("Comp Time Ledger.csv", "a", newline="") as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(list_of_values)

def create_CSV_Row(file_name, row_data):
    with open(file_name, "a", newline="") as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(row_data)

def read_One_Specific_CSV(file_path):
    df = pd.read_csv(file_path)
    print(df)

def read_All_CSVs_Return_Employee(employee, *args, specific_value=False):
    dbs_to_check = ["Approved.csv","Pending.csv","Rejected.csv"]
    print(args)



    frames = []

    for csv_file in dbs_to_check:
        df = pd.read_csv("History/" + csv_file)

        df2 = df.assign(Status=csv_file[:-4])
        test_value = df2.loc[df2['Employee'] == employee]

        frames.append(test_value)
    result = pd.concat(frames)

    if specific_value:
        return result.loc[result[args[0]] == args[1]]
    else:
        return result




def program_Setup_On_Startup():
    directory_dict = {
        "Users":{},
        "History":{
            "Pending.csv":["Date Requested", "Employee","Hours Available","Hours Requested","Week Ending",""],
            "Approved.csv":["Date Requested", "Employee","Hours Available","Hours Requested","Week Ending","Date Approved"],
            "Rejected.csv":["Date Requested", "Employee","Hours Available","Hours Requested","Week Ending","Date Denied"]}
    }

    for directory in directory_dict:
        print("Checking to see if "+directory+" is in the current directory..")
        if directory not in os.listdir():
            print(directory+ " directory not found.")
            print("Creating " + directory)

            os.mkdir(directory)

            for file_name, column_headers in directory_dict[directory].items():
                print("Creating " + file_name + " within directory " + directory)
                
                with open(directory+"/" + file_name, "w", newline="") as csv_file:
                    csv_writer = csv.writer(csv_file)

                    csv_writer.writerow(column_headers)
                    csv_file.close()
        else:
            print("Comp Time Ledger.csv is present.")


#For the personnel logging application.
def create_JSON_Personal_File(information_dict):
    import json
    with open("Users/" + information_dict["Name"]+'.json', 'w') as outfile:
        json.dump(information_dict,outfile)

#For the personnel logging application.
def read_JSON_Personal_File(user):
    import json

    with open('Users/' + user +'.json') as json_file:
        data = json.load(json_file)
    print(data)

    return data

#For the personnel logging application. Currently only updates one value at a time.
def updated_JSON_Personnel_File(info_list):
    import json

    user = "Users/" + info_list[0] + ".json"
    print(user)
    with open(user, "r") as jsonFile:
        data = json.load(jsonFile)


    for index, key in enumerate(data.keys()):
        try:
            data[key] = info_list[index]
        except IndexError as e:
            print("Error: " + str(e))
            print("Index: " + str(index) + " Key: " + key)
            pass

    with open(user, "w") as jsonFile:
        json.dump(data, jsonFile)

def delete_JSON_Personnel_File(user):
    os.replace("Users/" + user + ".json", "Retired Users/" + user + ".json")

#For the personnel viewing application
def get_All_Current_Personnel():
    personnel = [x.replace(".json","") for x in os.listdir("Users")]
    return personnel


class Database_Modifier:
    def __init__(self):
        self.database_name = "Information.db"

    def check_If_Table_Exists(self, table_name, list_of_columns):
        db = sqlite3.connect(self.database_name)

        list_of_columns = [column.replace(" ", "_").replace("-", "_") for column in list_of_columns]
        print(list_of_columns)

        print(table_name + " IS THE TABLE NAME")
        print(
            f"CREATE TABLE IF NOT EXISTS {table_name} (id INTEGER PRIMARY KEY AUTOINCREMENT  , {', '.join([f'{col} TEXT' for col in list_of_columns])})"
        )

        create_table_sql = f"CREATE TABLE IF NOT EXISTS {table_name} (id INTEGER PRIMARY KEY AUTOINCREMENT, {', '.join([f'{col} TEXT' for col in list_of_columns])})"

        db.execute(create_table_sql)
        db.commit()

    def create_Database_Row(self, table_name, dict_of_values):
        db = sqlite3.connect(self.database_name)

        columns = [column_name.replace(" ", "_").replace("-", "_") for column_name in dict_of_values.keys()]
        values = [value.replace(" ", "_").replace("-", "_") for value in dict_of_values.values()]

        print("Values: ")
        for i in values:
            print(i)

        insert_sql = f"INSERT INTO {table_name} ({', '.join(columns)}) VALUES ({', '.join(['?'] * len(columns))})"

        db.execute(insert_sql, values)
        db.commit()

    def read_Database_Single_Table(self, table_name, case_number):
        import sqlite3
        import pandas as pd

        sqliteConnection = sqlite3.connect(self.database_name)


        df = pd.read_sql_query("SELECT * FROM " + table_name, sqliteConnection)



        return_dict = {case_number:{table_name:{}}}

        for index, row in df.iterrows():
            if row.get(key="Case_Number") == case_number:
                return_dict[case_number][table_name][
                    str(row["Basic_Details_First_Name"] + " " + row["Basic_Details_Last_Name"])] = {}
                for data_name, data_value in row.items():
                    return_dict[case_number][table_name][
                        str(row["Basic_Details_First_Name"] + " " + row["Basic_Details_Last_Name"])][
                        str(data_name)] = str(data_value)

        return return_dict

    def read_Database_All_Tables(self, case_number):
        import sqlite3
        import pandas as pd

        try:

            # Making a connection between sqlite3
            # database and Python Program
            sqliteConnection = sqlite3.connect(self.database_name)

            # If sqlite3 makes a connection with python
            # program then it will print "Connected to SQLite"
            # Otherwise it will show errors
            print("Connected to SQLite")

            # Getting all tables from sqlite_master
            sql_query = """SELECT name FROM sqlite_master
            WHERE type='table';"""

            # Creating cursor object using connection object
            cursor = sqliteConnection.cursor()

            # executing our sql query
            list_of_table_names = [table_name[0] for table_name in cursor.execute(sql_query).fetchall()]

            return_dict = {case_number: {}}

            for database_table in list_of_table_names:
                df = pd.read_sql('SELECT * FROM ' + database_table, sqliteConnection)

                if str(database_table) != "sqlite_sequence" :
                    return_dict[case_number][database_table] = {}
                print("Table Name: " + str(database_table))

                for index, row in df.iterrows():
                    print("Row : " + str(row.get(key="Case_Number")))
                    if row.get(key="Case_Number") == case_number:

                        return_dict[case_number][database_table][
                            str(row["Basic_Details_First_Name"] + " " + row["Basic_Details_Last_Name"])] = {}
                        for data_name, data_value in row.items():
                            return_dict[case_number][database_table][str(row["Basic_Details_First_Name"] + " " + row["Basic_Details_Last_Name"])][str(data_name)] = str(data_value)

        except AttributeError as error:
            print("Failed to execute the above query", error)

        finally:
            # Inside Finally Block, If connection is
            # open, we need to close it
            if sqliteConnection:
                # using close() method, we will close
                # the connection
                sqliteConnection.close()

                # After closing connection object, we
                # will print "the sqlite connection is
                # closed"
                print("the sqlite connection is closed")
                return return_dict

    def update_Database_Table(self):
        pass

    def destroy_Database_Row(self, table_name, id_number):
        db = sqlite3.connect(self.database_name)

        insert_sql = f"DELETE FROM {table_name} WHERE id = '{id_number}'"

        db.execute(insert_sql)
        db.commit()