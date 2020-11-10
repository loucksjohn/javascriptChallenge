// from data.js
var tableData = data;
var tbody = d3.select('tbody');


// YOUR CODE HERE!
console.log(tableData)

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var inputField = d3.select("#filter-btn");
//list of things to filter on....

inputField.on("click", function(){

//if/else statement 

    var inputBox = d3.select("#datetime");
    var inputValues = inputBox.property("value");
    //console.log(inputValues);
    var ufoFilter = tableData.filter(selectDate => selectDate.datetime === inputValues);
    tbody.html("");

    ufoFilter.forEach((selectDate) => {
        var row = tbody.append("tr");
        Object.entries(selectDate).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});





// inputField.on("change", function() {
// var newText = d3.event.target.value;
// console.log(newText);
// });