//All The Questions, Options & The Answer
const quizData = [
  {
    question: "Question Will Be Here (Click on START)",
    a: "Answer 1",
    b: "Answer 2",
    c: "Answer 3",
    d: "Answer 4",
    ans: "null",
  },
  {
    question: "Q1. What is the full form of HTML?",
    a: "Cascading Style Sheet",
    b: "HyperText Markup Language",
    c: "Hyper Transfer Manipulation Language",
    d: "High Transfer Manipulation Language",
    ans: "b",
  },
  {
    question: "Q2. HTML helps to make ______.",
    a: "style of a webpage",
    b: "transfer Protocol of a webpage",
    c: "dynamic webpage",
    d: "structure of a webpage",
    ans: "d",
  },
  {
    question: "Q3. Which language is known as the language of website?",
    a: "JavaScript",
    b: "Java",
    c: "PHP",
    d: "Pearl",
    ans: "a",
  },
  {
    question: "Q4. Who makes the UI/UX of a website?",
    a: "Backend Developer",
    b: "Frontend Developer",
    c: "Database Administrator",
    d: "Digital Marketing Expert",
    ans: "b",
  },
  {
    question: "Q5. Which is the most important programming language?",
    a: "Python",
    b: "JavaScript",
    c: "Java",
    d: "Every language is important in its own way",
    ans: "d",
  },
];

//Selecting All The Elements From HTML and Declaring Needed Varibles
const question = document.querySelector("h2");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answer1 = document.querySelector("#ans1");
const answer2 = document.querySelector("#ans2");
const answer3 = document.querySelector("#ans3");
const answer4 = document.querySelector("#ans4");
const submitbutton = document.querySelector("#submit");
let currentQuestion = 0;
let next = 1;
let submit = 0;
let score = 0;

//Function To Display Question And Options In The Quiz Box
const displayQuestion = function () {
  question.textContent = quizData[currentQuestion + 1].question;
  option1.textContent = quizData[currentQuestion + 1].a;
  option2.textContent = quizData[currentQuestion + 1].b;
  option3.textContent = quizData[currentQuestion + 1].c;
  option4.textContent = quizData[currentQuestion + 1].d;
};

//Function To Remove Checked Radio Button And To Clear The Right/Wrong Answer Background Color
const refreshedOptions = function () {
  answer1.checked = false;
  answer2.checked = false;
  answer3.checked = false;
  answer4.checked = false;
  submitbutton.textContent = "SUBMIT";
  for (let i = 97; i <= 100; i++) {
    document
      .querySelector(`#${String.fromCharCode(i)}`)
      .classList.remove("wrongAnswer");
    document
      .querySelector(`#${String.fromCharCode(i)}`)
      .classList.remove("rightAnswer");
  }
};

//Function To Verify Whether The Selected Option Is Right Or Not
const verifyAnswer = function () {
  const answers = document.getElementsByName("answers");
  const realAnswer = quizData[currentQuestion + 1].ans;
  //Loop To Iterate Through All The Options
  for (let i = 0; i < answers.length; i++) {
    const checked = answers[i].checked;
    //Condition To Check Which Option Is Selected
    if (checked === true) {
      const value = answers[i].value;
      //Condition To Check If The Selected Option Is The Correct Answer
      if (value === realAnswer) {
        score++;
        document.querySelector(`#${value}`).classList.add("rightAnswer");
      } else {
        document.querySelector(`#${value}`).classList.add("wrongAnswer");
      }
    }
  }
};

//Code For Button Click
submitbutton.addEventListener("click", function () {
  //Condition So The Button (SUBMIT & NEXT) Works Till The Last Question
  if (currentQuestion < quizData.length - 1) {
    //Condition When The Submit Button Appears And Is Clicked
    if (submit === 1) {
      verifyAnswer();
      //Condition To Display Score After Attempting All The Questions
      if (currentQuestion === quizData.length - 2) {
        question.textContent = "Your Score = " + score;
        document.querySelector(".options").classList.add("hidden");
      }

      currentQuestion++;
      //Condition When The RE-ATTEMPT Button Appears
      submitbutton.textContent = `${
        currentQuestion === quizData.length - 1 ? "RE-ATTEMPT" : "NEXT"
      }`;
    }
    //Condition When The Next Button Appears And Is Clicked
    if (next === 1) {
      displayQuestion();
      refreshedOptions();
    }
    //Switch Submit And Next Button After Each Click
    submit = submit === 1 ? 0 : 1;
    next = next === 1 ? 0 : 1;
  }
  //Condition When The RE-ATTEMPT Button Is Clicked
  else if (currentQuestion === quizData.length - 1) {
    currentQuestion = 0;
    next = 0;
    submit = 1;
    score = 0;
    displayQuestion();
    document.querySelector(".options").classList.remove("hidden");
    refreshedOptions();
  }
});
