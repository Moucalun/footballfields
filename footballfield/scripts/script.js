var body = document.getElementById("body");
var inputBox = document.getElementById("inputBox");
var measType = document.getElementById("normalPeopleMeasurement");
var result = document.getElementById("result");

// prettier-ignore
function conversion() {
  if (measType.value == "Meters") {
      res = (inputBox.value / 131.2335).toPrecision(4);
      result.innerText = inputBox.value + " Meters equals " + res + " Football Fields";
  } else {
    res = ((inputBox.value / 0.9144).toPrecision(4) / 131.2335).toPrecision(4);
      result.innerText = inputBox.value + " Yards equals "  + res + " Football Fields";
  }
  result.style.fontSize = "24pt"
}

inputBox.addEventListener("change", conversion);
measType.addEventListener("click", conversion);
