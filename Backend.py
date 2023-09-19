import os, csv, datetime, sqlite3

today = str(datetime.date.today())


def record_Request(form_dict):
    list_of_values = list(form_dict.values())
    list_of_values.insert(0, today)

    with open("Comp Time Ledger.csv", "a", newline="") as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(list_of_values)


def program_Setup_On_Startup():
    print("Checking to see if Comp Time Ledger.csv is present in current directory.")
    if "Comp Time Ledger.csv" not in os.listdir():
        print("Comp Time Ledger.csv not found.")
        print("Creating Comp Time Ledger.csv")
        with open("Comp Time Ledger.csv", "w", newline="") as csv_file:
            csv_writer = csv.writer(csv_file)

            csv_writer.writerow(
                ["Date", "Employee", "Current Comp Time Balance","Week Ending" "Time and a Half Hours Worked",
                 "Double Time Worked","Compt Time Hours Requested", "Compt Time Hours Used", "Compt Time Available"])
            csv_file.close()
    else:
        print("Comp Time Ledger.csv is present.")


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