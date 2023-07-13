document.getElementById("calculateBtn").addEventListener("click", function() {
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    document.getElementById("bmiValue").textContent = "Please enter valid values.";
    document.getElementById("bmiCategory").textContent = "";
    return;
  }

  var bmi = weight / ((height / 100) ** 2);
  var category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  if (Math.abs(bmi - 18.5) < 0.01) {
    category = "Normal weight";
  }

  var bmiValue = bmi.toFixed(2);

  document.getElementById("bmiValue").textContent = bmiValue;
  document.getElementById("bmiCategory").textContent = category;

  var categoryItems = document.getElementsByClassName("category-item");
  for (var i = 0; i < categoryItems.length; i++) {
    categoryItems[i].classList.remove("highlight");
    var range = categoryItems[i].querySelector(".category-range").textContent;
    var rangeValues = range.split(" ");
    var rangeMin = parseFloat(rangeValues[1]);
    var rangeMax = parseFloat(rangeValues[3]);
  }
});
