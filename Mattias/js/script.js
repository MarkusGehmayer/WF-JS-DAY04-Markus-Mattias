/*
var sandwiches = { "sandwich": "hamburger",
				"calories": "260" };
var fries = { "fries_size": "Large French Fries",
				 "calories": "570" };


console.log("my favorite burger is " +sandwiches.sandwich);
console.log("My favorite burger is a " + sandwiches.sandwich + " which has approximately " +sandwiches.calories+" calories, along with it I enjoy eating " +fries.fries_size + "which have about " +fries.calories+ " calories.");
*/

window.onload = function() {

for(var i = 0; i < json.length; i++) {
  var obj = json[i];
  var table = document.getElementById("create");
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = obj.Unique_ID;
  cell2.innerHTML = obj.First_Name;
  cell3.innerHTML = obj.Last_Name;
  cell4.innerHTML = obj.Email_address;
  cell5.innerHTML = obj.Job_Title;
  cell6.innerHTML = obj.Salary;
};

};


