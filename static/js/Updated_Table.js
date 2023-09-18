/*jshint esversion: 6 */

class Table_Creator {
    constructor(title, question_and_input_dict) {

        this.title = title;
        this.question_and_input_dict = question_and_input_dict;


        //Find the div within the HTML File
        this.div = title.replaceAll(" ", "-") + "-Table"
        this.div_to_be_filled = document.getElementById(this.div);

        this.table_name = title + ' Table';


    }

    create_Table_Header() {
        console.log(this.div_to_be_filled)
        this.div_to_be_filled.innerHTML +=
            '<div class="Input-Table">' +
            '   <div class="Title-Row">' +
            '       <p>' + this.title + '</p>' +
            '   </div>' +
            '   <table id="' + this.table_name + '"> </table>' +
            '</div>';
    }

    create_Table_Body() {
        for (let [label, input_type] of Object.entries(this.question_and_input_dict)) {

            let table_to_fill = document.getElementById(this.table_name);
            let backend_label_text = this.title + ' ' + label;
            let row_to_be_fill = backend_label_text + '-Row'

            table_to_fill.innerHTML +=
                '<tr id="' + row_to_be_fill + '">' +
                '<td><label for="' + backend_label_text + '" class="text_label">' + label + ': </label></td>' +
                '</tr>';

            let row_to_fill = document.getElementById(row_to_be_fill)


            if (input_type === "number") {
                row_to_fill.innerHTML +=
                    '<td><input class="form-control" type="number" step="0.01" id="' + backend_label_text + '"  value="' + input_type + '"></td></tr>';
            } else if (input_type === "text") {
                row_to_fill.innerHTML +=
                    '<td><input class="form-control" type=' + input_type + ' id="' + backend_label_text + '"></td></tr>';
            } else if (input_type === "time") {
                row_to_fill.innerHTML +=
                    '<td><input class="form-control" type=' + input_type + ' id="' + backend_label_text + '" value="07:00"></td></tr>';

            } else if (input_type === "label") {
                row_to_fill.innerHTML +=
                    '<td><span id="Output ' + backend_label_text + '">0.00</span></td></tr>';
            }


            //table_to_fill.innerHTML +=
            //    '<tr>' +
            //    '<td><label for="' + label_text + '" class="text_label">' + label + ': </label></td>' +
            //    '<td><input type="' + input_type + '" step="0.01" id="' + label_text + '"></td>' +
            //    '</tr>';
        }


    }


    create_Complex_Table() {


        let table_to_fill = document.getElementById(this.table_name);

        //let row_to_be_fill = backend_label_text + '-Row'


        table_to_fill.innerHTML +=
            '<tr>' +
            '<th></th>' +
            '<th>Today</th>' +
            '<th>Yesterday</th>' +
            '<th>Used</th>' +
            '</tr>';


        ;


        for (let [question, dict_of_stuff] of Object.entries(this.question_and_input_dict)) {
            for (let [test, input_type] of Object.entries(dict_of_stuff)) {

                console.log(test)

                let backend_label_text = this.title + ' ' + test;

                console.log("backend label text: " + backend_label_text)

                table_to_fill.innerHTML +=
                    '<td><p>' + test + ':</p></td>' +
                    '<td><input class="form-control" type="number" step="0.01" id="' + backend_label_text + ' Today" value="' + input_type[0] + '"></td>' +
                    '<td><input class="form-control" type="number" step="0.01" id="' + backend_label_text + ' Yesterday" value="' + input_type + '"></td>' +
                    '<td><input class="form-control" type="number" step="0.01" id="' + backend_label_text + ' Used" value="' + input_type + '"></td>';


            }
            break


        }


    }

}


function setup_HTML() {
    for (let [title, question_and_prompt_dict] of Object.entries(table_structure)) {


        let new_table = new Table_Creator(title, question_and_prompt_dict)

        new_table.create_Table_Header()


        if ("Plant Chemicals" === title || "Comag Chemicals" === title) {
            new_table.create_Complex_Table()

        } else {
            new_table.create_Table_Body()
        }


    }

}


const
    table_structure = {
        "Influent":
            {
                "Time": "time",
                "Temp": "number",
                "PH": "number",
                "D.O.": "number",
                "Comp P.H.": "number",
                "ALK": "number",
                "S.S. (mL/L)": "number"
            },
        "Final Effluent":
            {
                "Time": "time",
                "Temp": "number",
                "PH": "number",
                "D.O.": "number",
                "Comp P.H.": "number",
                "ALK": "number",
                "S.S. (mL/L)": "number"
            },

        "Comp. pH/ALK": {
            "Primary p.H.": "number",
            "Primary Alk": "number",
            "Sec p.H.": "number",
            "Sec Alk": "number",
        },

        "Baker": {
            "Composite pH": "number",
            "Grab pH": "number",
        },

        "#2 D Box": {
            "Time": "number",
            "Temp": "number",
            "p.H.": "number",
            "D.O.": "number",
            "5 Min": "number",
            "10 Min": "number",
            "15 Min": "number",
            "20 Min": "number",
            "25 Min": "number",
            "30 Min": "number",
            "60 Min": "number"

        },
        "TSS": {

            "Influent": "number",
            "Primary": "number",
            "Secondary": "number",
            "Effluent": "number",
            "Baker": "number",
            "% Removal": "number",
            "MLSS": "number",
            "MLVSS": "number",
            "RASS": "number",
            "RASVSS": "number",
            "SVI": "number"

        },

        "RAS Pumps": {
            "RAS 1": "number",
            "RAS 2": "number",
            "RAS 3": "number",
            "RAS 4": "number",
            "RAS 5": "number",
            "Flow": "number"

        },

        "Aluminum": {
            "Comag Influent Q": "number",
            "Comag WAS Q": "number"
        },

        "Chlorine Residual": {

            "Q Effluent Chemical Control": "number",
            "Hydro Pump Online A or H": "number",
            "Hypo Tank Level": "number",
            "Residual Shed 1": "number",
            "Residual Shed 2": "number",
            "Residual Shed 3": "number",
            "Bisulfite Pump Online A or H": "number",
            "Bisulfite Tank Level": "number",
            "P.H.": "number",
            "High Chlorine Residual mg/L": "number",
            "Final Eff. Chlorine ug/L": "number"
        },

        "Total Q": {
            "WAS Q": "number",
            "Primary Sludge Q": "number",
            "RAS Q": "number",
            "Comag Was Q": "number",
            "Comag Influent Q": "number",

        },
        "Total-P": {

            "Secondary": "number",
            "Final Effluent": "number",

        },
        "Ammonia": {

            "Final Effluent": "number",
            "Nitrite": "number",
            "Nitrate": "number",

        },
        "BOD": {

            "Influent": "number",
            "Primary": "number",
            "Secondary": "number",
            "Effluent": "number",
            "Baker": "number",
            "% Removal": "number",

        },
        "COD": {

            "Influent": "number",
            "Baker": "number",

        },
        "Ecoli": {
            "Value": "number"
        },

        "Plant Chemicals": {
            "Today":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Yesterday":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Total":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
        },

        "Comag Chemicals": {
            "Today":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Yesterday":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Total":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
        },

        "Influent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },



        "Primary Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "D Box TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "RAS TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Secondary Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Final Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Baker TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Water Dept TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Influent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },



        "Primary Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "D Box TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "RAS TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Secondary Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Final Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Baker TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Water Dept TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },





    }