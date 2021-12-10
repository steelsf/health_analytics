
// On change to the DOM, call getData()
d3.selectAll("#emotionalDistress").on("change", getData);
d3.selectAll("#physicalDistress").on("change", getData);
d3.selectAll("#foodDistress").on("change", getData);
d3.selectAll("#sleepDistress").on("change", getData);
d3.selectAll("#incomeDistress").on("change", getData);
d3.selectAll("#homeOwnership").on("change", getData);
d3.selectAll("#homeDistress").on("change", getData);
d3.selectAll("#highschool").on("change", getData);

// Function called by DOM changes
function getData() {
  var Q1 = d3.select("#emotionalDistress");
  var Q2 = d3.select("#physicalDistress");
  var Q3 = d3.select("#foodDistress");
  var Q4 = d3.select("#sleepDistress");
  var Q5 = d3.select("#incomeDistress");
  var Q6 = d3.select("#homeOwnership");
  var Q7 = d3.select("#homeDistress");
  var Q8 = d3.select("#highschool");
  var tempDictionary = scoreDictionary
  // Assign the value of the dropdown menu option to a variable
  var Q1_A= Q1.property("value");
  var Q2_A= Q2.property("value");
  var Q3_A= Q3.property("value");
  var Q4_A= Q4.property("value");
  var Q5_A= Q5.property("value");
  var Q6_A= Q6.property("value");
  var Q7_A= Q7.property("value");
  var Q8_A= Q8.property("value");
  var word = Q1_A + Q2_A + Q3_A + Q4_A + Q5_A + Q6_A + Q7_A + Q8_A;
  console.log("code", word);
  console.log("dictionary output", tempDictionary[word]);
  var score = tempDictionary[word];
  // output.text(score)
  document.getElementById("score").innerHTML = score;
};





// // Function to reverse a string
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// // Function to handle input change
// function handleChange(event) {
//   // grab the value of the input field
//   let inputText = d3.event.target.value;

//   // reverse the input string
//   let reversedInput = reverseString(inputText);

//   // Set the output text to the reversed input string
//   output.text(reversedInput);
// }

// Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", "values", [newdata]);
// }

// init();
