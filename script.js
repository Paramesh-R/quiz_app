const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// Get all the Elements

// Quiz container
let quizContainer = document.getElementById("quiz");

// Question Heading
let questionHeading = document.getElementById("questionHeading")

//Options
let optionList = document.querySelectorAll(".optionList");
console.log(optionList);

//Each Options Label
let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let optionC = document.getElementById("optionC");
let optionD = document.getElementById("optionD");

//submit button
let submitBtn = document.getElementById("submit");

// _________________________________________________
// _________________________________________________

let score = 0;
let currentQuizCount = 0;
console.log(quizData[0])

loadQuiz();
function loadQuiz(){
    console.log("Quiz loaded");
    deselectOption();
    let currentQuizData = quizData[currentQuizCount];
    questionHeading.innerText = currentQuizData.question;
    optionA.innerText = currentQuizData.a;
    optionB.innerText = currentQuizData.b;
    optionC.innerText = currentQuizData.c;
    optionD.innerText = currentQuizData.d;

}

// Deselect Option
function deselectOption(){
    console.log("Options deselected on load")
    optionList.forEach((element)=>{element.checked=false;});
}

//Selection of Option
function getSelected(){
    var selectedAnswer;
    optionList.forEach((element) =>{
        if(element.checked){
            selectedAnswer = element.id;
        }
    })
    return selectedAnswer;
}


submitBtn.addEventListener('click',()=>{
    let answer = getSelected();
    if (answer){
        if(answer===quizData[currentQuizCount].correct){
            score++;
         }
         console.log(score);
         currentQuizCount++;
         if(currentQuizCount<quizData.length){
            loadQuiz();
         }
         else{
            quizContainer.innerHTML =(
                `
                <h2>You scored ${score}/${quizData.length}</h2>
                <button onClick=location.reload() class="submit">Reset</button>

                `
                
            );
            document.body.style.backgroundImage="url(https://i.ibb.co/frqqx3S/glitterimg.jpg)";
         }
         
    }
})