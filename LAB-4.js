const quiz = [
  { question: "Who is Prime Minister of INDIA", answer: "Narander Modi" },
  { question: "Which is biggest state in INDIA", answer: "Rajasthan" },
  { question: "Who is GOAT of football", answer: "Cristino Ronaldo" },
  { question: "What keyword is used to declare a variable in JS?", answer: "let" }
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
  let userAnswer = prompt(quiz[i].question);

  userAnswer = userAnswer.trim().toLowerCase();

  if (userAnswer === quiz[i].answer) {
    alert("Correct! 🎉");
    score++;
  } else {
    alert("Wrong ❌ The correct answer is: " + quiz[i].answer);
  }
}

alert("Quiz Finished! Your final score is: " + score + " out of " + quiz.length);