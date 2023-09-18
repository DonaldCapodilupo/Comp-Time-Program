/*jshint esversion: 6 */



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
            "Weight Difference": "label",
            "Results": "label",
        },


        "Primary Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "D Box TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "RAS TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Secondary Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Final Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Baker TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Water Dept TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Influent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },


        "Primary Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "D Box TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "RAS TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Secondary Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Final Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Baker TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Water Dept TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "label",
            "Results": "label",
        },

        "Primary DOB's": {

            "PST1": "number",
            "PST2": "number",
            "PST3": "number",
        },

        "Secondary DOB's": {

            "SST1": "number",
            "SST2": "number",
            "SST3": "number",
            "SST4": "number",
        },

        "Tertiary DOB's": {

            "TST1": "number",
            "TST2": "number",
            "TST3": "number",
        },

        "Reaction Tanks": {
            "Sec p.H. Grab?": "number",
            "Sec. Meter?": "number",
            "RT #1 p.H?": "number",
            "Tuba (Meter)": "number",
            "RT #4 p.H.:": "number",
        },

        "Turbidity": {
            "Meter": "number",
            "SEC": "number",
            "F.E.": "number",
            "Comag": "number",
            "Baker C": "number",
            "Baker (G)": "number",
        },

        "Press 1 Feed": {

            "Sample Wet": "number",
            "Tare": "number",
            "Difference Wet": "label",
            "Sample Dry": "number",
            "Difference Dry": "label",
            "Percent Solids": "label"
        },

        "Press 1 Cake": {
            "Sample Wet": "number",
            "Tare": "number",
            "Difference Wet": "label",
            "Sample Dry": "number",
            "Difference Dry": "label",
            "Percent Solids": "label"
        },

        "Press 2 Feed": {
            "Sample Wet": "number",
            "Tare": "number",
            "Difference Wet": "label",
            "Sample Dry": "number",
            "Difference Dry": "label",
            "Percent Solids": "label"
        },

        "Press 2 Cake": {
            "Sample Wet": "number",
            "Tare": "number",
            "Difference Wet": "label",
            "Sample Dry": "number",
            "Difference Dry": "label",
            "Percent Solids": "label"
        },

        "Filtrate": {

            "mL": "number",
            "Dry Weight": "number",
            "Tare": "number",
            "Difference": "label",
            "mg/L": "label",
            "Operator": "text",
            "GT Used": "number",
        }
        ,

        "Gravity Thickener Depth of Blankets": {

            "GT-1": "number",
            "GT-2": "number",
        }


    }


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
                    '<td><input name="' + backend_label_text + '" class="form-control" type="number" step="0.01" id="' + backend_label_text + '"  value="' + input_type + '"></td></tr>';
            } else if (input_type === "text") {
                row_to_fill.innerHTML +=
                    '<td><input name="' + backend_label_text + '" class="form-control" type=' + input_type + ' id="' + backend_label_text + '"></td></tr>';
            } else if (input_type === "time") {
                row_to_fill.innerHTML +=
                    '<td><input name="' + backend_label_text + '" class="form-control" type=' + input_type + ' id="' + backend_label_text + '" value="07:00"></td></tr>';

            } else if (input_type === "label") {
                row_to_fill.innerHTML +=
                    '<td><span  id="Output ' + backend_label_text + '">0.00</span></td></tr>';
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

function setUpHTML() {

    for (let [title, question_and_prompt_dict] of Object.entries(table_structure)) {


        let new_table = new Table_Creator(title, question_and_prompt_dict)

        new_table.create_Table_Header()


        if ("Plant Chemicals" === title || "Comag Chemicals" === title) {
            new_table.create_Complex_Table()

        } else {
            new_table.create_Table_Body()
        }


    }


    setup_Calculating_Plant_Chemical_Tables()
    setup_Calculating_Comag_Chemical_Tables()
    setup_Calculating_Press_Tables()
    setup_Calculating_Filtrate_Tables()
    setup_Calculating_TSS_And_TVSS()


}

function setup_Calculating_Plant_Chemical_Tables() {
    let plant_chemicals_array = document.querySelectorAll(".plant_chemical_tanks, .comag_chemicals_tanks");

    plant_chemicals_array.forEach(function (elem) {

        elem.addEventListener("input", function (event) {

            console.log(event.target["id"]);
            let field_user_typed_into = event.target["id"];


            let row_user_typed_into = field_user_typed_into.substring(0, field_user_typed_into.lastIndexOf(" "));


            let today_value = document.getElementById(row_user_typed_into + " Today").value;
            let yesterday_value = document.getElementById(row_user_typed_into + " Yesterday").value;

            document.getElementById(row_user_typed_into + " Used").value = Math.abs(today_value - yesterday_value);

        })
    })

}

function setup_Calculating_Comag_Chemical_Tables() {
    let comag_chemicals_array = document.querySelectorAll(".comag_chemical_tanks");

    comag_chemicals_array.forEach(function (elem) {

        elem.addEventListener("input", function (event) {


            let field_user_typed_into = event.target["name"];

            const plant_tank_data = ["3,500 Caustic", "7,500 Alum", "Polymer",]; //

            for (let tank of plant_tank_data) {

                if (field_user_typed_into.includes(tank)) {

                    let today_value = document.getElementById("Comag Today " + tank).value;
                    let yesterday_value = document.getElementById("Comag Yesterday " + tank).value;

                    document.getElementById("Comag Used " + tank).value = Math.abs(today_value - yesterday_value);

                }


            }


        })
    })
}

function setup_Calculating_Press_Tables() {
    let press_table_array = document.querySelectorAll(".press_Table");


    press_table_array.forEach(function (elem) {

        elem.addEventListener("input", function (event) {

            console.log(event.target["id"]);


            let specific_press_user_input = event.target["id"].split(" ").slice(0, 3).join(" ");

            console.log(specific_press_user_input);
            console.log(specific_press_user_input + " Sample Wet");

            console.log("Press 1 Feed Sample Wet")


            let sample_wet = document.getElementById(specific_press_user_input + " Sample Wet").value;
            let tare = document.getElementById(specific_press_user_input + " Tare").value;
            let sample_dry = document.getElementById(specific_press_user_input + " Sample Dry").value;


            let difference_wet = (sample_wet - tare).toFixed(2).toString()
            let difference_dry = (sample_dry - tare).toFixed(2).toString()


            document.getElementById("Output " + specific_press_user_input + " Difference Wet").innerHTML = difference_wet;
            document.getElementById("Output " + specific_press_user_input + " Difference Dry").innerHTML = difference_dry;


            let percentage_solids = ((difference_dry / difference_wet) * 100).toFixed(2);


            if (isNaN(percentage_solids)) {
                document.getElementById("Output " + specific_press_user_input + " Percent Solids").innerHTML = "0.00%";
            } else {
                document.getElementById("Output " + specific_press_user_input + " Percent Solids").innerHTML = percentage_solids + "%"
            }


        })
    })
}

function setup_Calculating_Filtrate_Tables() {
    let filtrate_array = document.querySelectorAll(".filtrate_Table");

    console.log(filtrate_array)

    filtrate_array.forEach(function (elem) {

        elem.addEventListener("input", function (event) {

            console.log(event.target["id"]);

            let milliliters_used = document.getElementById("Filtrate mL").value;
            let dry_weight = document.getElementById("Filtrate Dry Weight").value;
            let tare = document.getElementById("Filtrate Tare").value;

            let difference = (dry_weight - tare).toFixed(2).toString()
            let milligrams_per_litre = ((difference * 100000) / milliliters_used).toFixed(2).toString()

            document.getElementById("Output Filtrate Difference").innerHTML = difference;
            document.getElementById("Output Filtrate mg/L").innerHTML = milligrams_per_litre;


        })
    })
}

//This function needs to be completed. How to check "TSS Influent" and "TSS Primary Effluent" with one haveing 2 words and the other having 3.
function setup_Calculating_TSS_And_TVSS() {

    let suspended_solids_array = document.querySelectorAll(".suspended_solids_array");

    suspended_solids_array.forEach(function (elem) {

        elem.addEventListener("input", function (event) {
            console.log(event.target["id"]);


            let specific_press_user_input = event.target["id"].split(" ").slice(0, 3).join(" ");

            console.log(specific_press_user_input);



            let milliliters_used = document.getElementById(specific_press_user_input + " ML Sample").value;
            let tare = document.getElementById(specific_press_user_input + " Dry Weight").value;
            let sample_dry = document.getElementById(specific_press_user_input + " Start Weight").value;


            let weight_difference = (sample_dry - tare).toFixed(4).toString()
            let results = ((weight_difference * 1000000) /milliliters_used ).toFixed(2).toString()

            document.getElementById("Output " + specific_press_user_input + " Weight Difference").innerHTML =
                Math.abs(weight_difference);



            if (isNaN(results)) {
                document.getElementById("Output " + specific_press_user_input + " Results").innerHTML = "0.00%";
            } else {
                document.getElementById("Output " + specific_press_user_input + " Results").innerHTML = results + "%"
            }
        })
    })

}


