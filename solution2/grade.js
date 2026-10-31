const gradeForm = document.querySelector("#grade-form");
const nameInput = document.querySelector("#studentName");
const scoreInput = document.querySelector("#score");

const resultName = document.querySelector("#resultName");
const resultScore = document.querySelector("#resultScore");
const resultGrade = document.querySelector("#resultGrade");

function getGrade(score) {
  if (score >= 70) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 45) {
    return "D";
  } else if (score >= 40) {
    return "E";
  } else {
    return "F";
  }
}

function addError(error) {
  resultGrade.classList.remove("bg-green-100", "text-green-700");
  resultGrade.classList.add("error");
  resultGrade.textContent = error;
}

gradeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  console.log(score);

  if (name == "" || score == "") {
    addError("Please enter student's name and score");
  }

  if (score < 0 || score > 100) {
    addError("Score must not be below 0 or above 100");
  }

  resultName.textContent = name;
  resultScore.textContent = score;

  const grade = getGrade(score);
  resultGrade.textContent = `${name} scored ${score} and recieved grade ${grade}`
  
});
