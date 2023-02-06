var form = document.querySelector("#BMRForm");
var metricButton = document.querySelector("#metric");
var imperialButton = document.querySelector("#imperial");
var genderField = document.querySelector("#gender");
var ageField = document.querySelector("#age");
var weightField = document.querySelector("#weight");
var height1Field = document.querySelector("#height1");
var height2Field = document.querySelector("#height2");
var calculateButton = document.querySelector("#calculate");
var resetButton = document.querySelector("#reset");
var bmrDisplay = document.querySelector("#calculation-display");

// Switch to Metric
metricButton.addEventListener("click", () => {
  metricButton.value = "true";
  imperialButton.value = "false";
  weightField.placeholder = "kilograms";
  height1Field.placeholder = "meters";
  height2Field.placeholder = "centimeters";
  bmrDisplay.style.display="none";
});

// Switch to Imperial
imperialButton.addEventListener("click", () => {
  imperialButton.value = "true";
  metricButton.value = "false";
  weightField.placeholder = "pounds";
  height1Field.placeholder = "feet";
  height2Field.placeholder = "inches";
  bmrDisplay.style.display="none";
});

resetButton.addEventListener("click", () => {
  bmrDisplay.style.display="none";
});

calculateButton.addEventListener("click", () => {
  let activityLevel = document.querySelector("input[name='activity']:checked").value;
  let BMR;
  let calorieIntake;
  let weight = parseFloat(weightField.value);
  let age = parseFloat(ageField.value);
  if (height2Field.value === "") {
    height2Field.value = "0";
  }

  // Metric Calculation
  if (metricButton.value === "true") {
    let height = (parseFloat(height1Field.value) * 100) + parseFloat(height2Field.value);

      // Gender Check
      if (genderField.options[genderField.selectedIndex].value === "male") {
        BMR = 66.5 + (13.76 * weight) + (5.003 * height) - (6.755 * age);
        console.log(weightField, ageField, height);
      }
      else {
        BMR = 665 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
      }
  }
  // Imperial Calculation
  else {
    let height = (parseFloat(height1Field.value) * 12) + parseFloat(height2Field.value);

    // Gender Check
    if (genderField.options[genderField.selectedIndex].value === "male") {
      BMR = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
    }
    else {
      BMR = 665 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
  }

  // Calculate Daily Calorie Intake
  switch (activityLevel) {
    case "sedentary":
      calorieIntake = BMR * 1.2;
      break;
    case "lightly":
      calorieIntake = BMR * 1.375;
      break;
    case "moderately":
      calorieIntake = BMR * 1.55;
      break;
    case "very":
      calorieIntake = BMR * 1.725;
      break;
    case "super":
      calorieIntake = BMR * 1.9;
      break;
  }

  BMR = Math.round(BMR);
  calorieIntake = Math.round(calorieIntake);
  bmrDisplay.style.display = "block";
  bmrDisplay.innerHTML = `Your BMR is <b>${BMR} kcal</b> and based on your activity level, your calorie intake should be <b>${calorieIntake} kcal</b>`;
});
