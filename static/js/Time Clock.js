/*jshint esversion: 6 */
/* global console*/
/* use strict*/





function get_Current_Time(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (hours > 12) {
        hours = hours - 12;
    }


    let t_str = hours + ":" + minutes + ":" + seconds + " ";
    if (hours > 11) {
        t_str += "PM";
    } else {
        t_str += "AM";

    }

    return t_str;
}


function updateTime() {
    document.getElementById('time_span').innerHTML = get_Current_Time();

}








function setupHTML() {

    let input = document.getElementById("employee_id");
    input.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("Submit Button").click();
        }
    });


    document.getElementById("employee_id").focus();
}