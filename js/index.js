let questions = [
    {
        word: "slowly",
        answer: "adverb"
    },

    {
        word: "ride",
        answer: "verb"
    },


    {
        word: "bus",
        answer: "noun"
    },

    {
        word: "fast",
        answer: "adjective"
    }]









let userForm = document.querySelector("#FormName")
let userBTn = document.querySelector(".userBtn")
let userName = document.querySelector("#UserName")
let userInput = document.querySelector("#userInput")
let quizForm = document.querySelector("#quiz")
let radioButtons = document.querySelectorAll("input[type='radio']")
let nextBtn = document.querySelector("#next")
let result = document.querySelector("#result")
let number = document.querySelector("#number")
var questionRoll


let userAnswer = ''
let userScore = 0
let i = -1






userBTn.addEventListener("click", function () {

    userName = userName.value
    userForm.classList.add("d-none")
    quizForm.classList.replace("d-none", "d-block")
    userInput.innerHTML = userName
    update()


})




for (let i = 0; i < radioButtons.length; i++) {

    radioButtons[i].addEventListener("click", function () {

        userAnswer = radioButtons[i].value
        console.log(userAnswer);

    })


}



nextBtn.addEventListener("click", function () {


    if (i < questions.length) {


        if (userAnswer == questions[i].answer) {
            userScore++
            update()
            console.log(userScore);


        } else {

            update()


        }




    } else {

        quizForm.classList.replace("d-block", "d-none")
        result.classList.replace("d-none", "d-block")
        number.innerHTML = userScore


    }





})


function update() {
    i++
    questionRoll = document.querySelector("#quest").innerHTML = questions[i].word

}









































