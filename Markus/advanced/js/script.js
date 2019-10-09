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
  li.setAttribute("id","farbe"+i)
  
  var pic = document.createElement("IMG");
  pic.setAttribute("src", "./img/book"+[i]+".png");
  pic.setAttribute("width", "120");
  pic.setAttribute("height", "150");

  li.appendChild(pic);
  ulist.appendChild(li);
  var elementUL = document.getElementById("main");
  elementUL.appendChild(ulist);

// Picture
  var elementPIC = document.getElementById("main");
  elementPIC.appendChild(li);
  
// BOOLEAN
if (obj.read == "true") {
  document.getElementById("farbe"+i).style.backgroundColor = "green";
} else {
  document.getElementById("farbe"+i).style.backgroundColor = "red";
}
};
};