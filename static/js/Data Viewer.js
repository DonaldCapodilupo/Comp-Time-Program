/*jshint esversion: 6 */


function create_Dropdown(data) {
    //You wouldn't look at a chart for "Today", "Submit Button",


    for (const [key, value] of Object.entries(data)) {

        var opt = document.createElement("option");
        document.getElementById("chart_data_list").innerHTML += '<option id="' + key + '">' + key + '</option>';
        console.log(key)

    }
}


function create_Chart_Divs(data) {
    for (const [key, value] of Object.entries(data)) {

        const div_to_fill = document.getElementById("Chart-Data");

        //console.log(div_to_fill)
        //console.log(key)

        //Title Of The Table
        div_to_fill.innerHTML +=
            '<div style="display:none" id="' + key + ' Div" class="Chart Divs">' +
            '<canvas id="' + key + ' Canvas"></canvas>' +
            '</div>'

    }
}


function make_Charts(data) {
    for (const [key, value] of Object.entries(data)) {
        let ctx = document.getElementById(key + " Canvas");
        let my_chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data["Dates"],
                datasets: [{
                    label: key,
                    data: data[key],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
