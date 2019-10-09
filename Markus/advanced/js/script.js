window.onload = function() {

for(var i = 0; i < book.length; i++) {
  var obj = book[i];
  var para = document.createElement("p");
  var node = document.createTextNode(obj.title + " - " + obj.author);
  para.appendChild(node);
  var element = document.getElementById("main");
  element.appendChild(para);

// UL, LI
  var ulist = document.createElement("ul");
  var li = document.createElement("li");
  var pic = document.createElement("IMG");
  li.appendChild(pic);
  ulist.appendChild(li);
  var elementUL = document.getElementById("main");
  elementUL.appendChild(ulist);

// Picture
  pic.setAttribute("src", "./img/book.png");
  pic.setAttribute("width", "120");
  pic.setAttribute("height", "150");
  document.body.appendChild(pic);

  };




  // var row = table.insertRow(i);
  // var cell1 = row.insertCell(0);
  // var cell2 = row.insertCell(1);
  // var cell3 = row.insertCell(2);
  // var cell4 = row.insertCell(3);
  // var cell5 = row.insertCell(4);
  // var cell6 = row.insertCell(5);
  // cell1.innerHTML = obj.Unique_ID;
  // cell2.innerHTML = obj.First_Name;
  // cell3.innerHTML = obj.Last_Name;
  // cell4.innerHTML = obj.Email_address;
  // cell5.innerHTML = obj.Job_Title;
  // cell6.innerHTML = obj.Salary;

};