window.onload = function() {

for(var i = 0; i < json.length; i++) {
  var obj = json[i];

  var para = document.createElement("p");
  var node = document.createTextNode(obj.title +" - " + obj.author);
  para.appendChild(node);
  var element = document.getElementById("main");
  element.appendChild(para);

  var ul = document.createElement("ul");
  var li = document.createElement("li");
  var pic = document.createTextNode(obj.title +" - " + obj.author);
  li.appendChild(pic);
  ul.appendChild(li);
  var element2 = document.getElementById("main");
  element2.appendChild(ul);



  /*  
  var table = document.getElementById("main");
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
  */
};
};