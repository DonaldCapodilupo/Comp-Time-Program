/*jshint esversion: 6 */

function create_Question_Divs(){
    var divsToHide = document.getElementById("question_Div");

    for(const [question_number, values] of Object.entries(quiz_1_questions)) {

            divsToHide.innerHTML +=
                '<div class="row border mt-2" style="display:none" id="Question_' + question_number + '_Card_Div">' +
                    '<div class="row" id="Question_' + question_number + '"></div>' +
                    '<div class="row" id="Question_' + question_number + '_Possible_Answers_Div"> </div>'+
                '</div>';


            console.log(`${question_number}`)
            for (const [key1, key2] of Object.entries(values)) {

                console.log(`Key 1: ${key1}`)

                if (key1 === "Answer") {

                } else {
                    let question_div_to_fill = document.getElementById("Question_" + question_number)
                    console.log("question_" + question_number)

                    question_div_to_fill.innerHTML +=
                        '<h2 class="mb-3" id="' + question_number + ' Question"> ' + key1 + '</h2>'


                    const button_choices = ['A','B','C','D','E','F','G','H'];

                    for (let index = 0; index < key2.length; index++) {//const answer of key
                        let question_answer_div_to_fill = document.getElementById('Question_' + question_number + '_Possible_Answers_Div')

                        question_answer_div_to_fill.innerHTML +=
                            '<div class="row mb-3 mt-3">'+

                            '<div class="col-2 d-flex justify-content-center">'+
                            '<button type="button" class="btn btn-info">'+ button_choices[index] +'</button>'+
                            '</div>'+


                            '<div class="col">'+
                            '<h3> ' +key2[index] + '</h3>'+
                            '</div>';

                    }


                }


            }


        }
}


function show_One_Question_Div(){
    const question_div_array = document.getElementById("Question_Card_Div")
    question_div_array.style.display = "block";
}


const Quiz_Tracker =
    {
        "Current Question" : 1,
        "Current Score":0,
        "Total Number of Questions":0,
        "Questions Correct":0,
        "Questions Wrong":0
    }