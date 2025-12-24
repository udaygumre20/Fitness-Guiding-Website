// Declare elements:
const bmiForm = document.getElementById("bmi-form");
const bmiSubmit = document.getElementById("bmi-submit");
const calorieForm = document.getElementById("calorie-form");
const calorieSubmit = document.getElementById("calorie-submit");
const showExercise = document.getElementById("show-exercise");
const exerciseSelect = document.getElementById("exercise-select");
const exercisePic = document.getElementById("exercise-pic");
// *****************

// BMI Calculator
bmiSubmit.addEventListener("click", function (event) {
  const height = parseFloat(document.getElementById("bmi-height").value) / 100;
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const result = weight / (height * height);

  if (!isNaN(result) && result > 0) {
    if (result < 18.5)
      document.getElementById("bmi-result").innerHTML = "YOUR BMI = " + result.toFixed(1) + " (Underweight)";
    else if (result < 24.9)
      document.getElementById("bmi-result").innerHTML = "YOUR BMI = " + result.toFixed(1) + " (Normal weight)";
    else
      document.getElementById("bmi-result").innerHTML = "YOUR BMI = " + result.toFixed(1) + " (Overweight)";
  }
  else {
    alert("Please enter a valid input!");
  }
});
// *****************


// Calorie Calculator:
calorieSubmit.addEventListener("click", function (event) {
  // Declarations:
  let bmr, need;
  const gender = document.getElementsByName("gender");
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("calorie-height").value);
  const weight = parseFloat(document.getElementById("calorie-weight").value);
  const activity = document.getElementById("activity").selectedIndex;

  // Inputs are valid:
  if (age <= 80 && age >= 15 && height > 0 && weight > 0) {
    // Male:
    if (gender[0].checked) {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    }
    //Female:
    else if (gender[1].checked) {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    // Gender unchecked:
    else {
      alert("Please enter a valid input!");
      return;
    }
    if (activity == 0) need = bmr;
    else if (activity == 1) need = bmr * 1.2;
    else if (activity == 2) need = bmr * 1.465;
    else if (activity == 3) need = bmr * 1.375;
    else if (activity == 4) need = bmr * 1.55;
    else if (activity == 5) need = bmr * 1.725;
    else need = bmr * 1.9;

    document.getElementById("calorie-result").innerHTML = "YOUR CALORIE NEEDING = " + Math.round(need) + " cal/day";
  }
  // Inputs are invalid:
  else
    alert("Please enter a valid input!");
});
// *****************


// Exercise Guide:
showExercise.addEventListener("click", function (event) {
  const select = exerciseSelect.value;
  if (select != "none") {
    exercisePic.src = "img/exercises/" + select + ".svg";
    exercisePic.style = "background: #EBEBEB; padding: 2rem; border-radius: 16px; box-shadow: 0 0 4px #000";
  }
});
// *****************

// Modal handling script
const modal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-btn");
const closeBtn = document.querySelector(".close-btn");

loginBtn.onclick = (event) => {
  event.preventDefault();
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Check for "Welcome" parameter in URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("signup") === "success") {
  const name = urlParams.get("name") || "User";
  // You could replace this with a nice modal, but an alert is simple and guaranteed to be seen
  alert("Welcome to Unite Active Pulse, " + name + "! Your registration was successful.");

  // Clean up URL (remove query param) without refreshing
  window.history.replaceState({}, document.title, window.location.pathname);
}