
let h3 = document.querySelector("h3");

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let weight = parseInt(document.querySelector("#weight").value);
  let height = parseInt(document.querySelector("#height").value);

  if (weight === "" || isNaN(weight) || weight <= 0) {
    h3.innerHTML = "Please enter a valid weight";
  } else if (height === "" || isNaN(height || height <= 0)) {
    h3.innerHTML = "Please enter a valid height";
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.5) {
      h3.innerHTML = `Your BMI is ${bmi}. You are underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      h3.innerHTML = `Your BMI is ${bmi}. You are normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      h3.innerHTML = `Your BMI is ${bmi}. You are overweight`;
    } else {
      h3.innerHTML = `Your BMI is ${bmi}. You are obese`;
    }
  }
})