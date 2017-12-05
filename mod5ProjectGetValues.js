function GetValues() {
  var table = document.getElementById("displayHere")
  var fname = (document.getElementById("fname").value)
  var lname = (document.getElementById("lname").value)
  var address = (document.getElementById("address").value)
  var city = (document.getElementById("city").value)
  var state = (document.getElementById("state").value)

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = fname;
  cell2.innerHTML = lname;
  cell3.innerHTML = address;
  cell4.innerHTML = city;
  cell5.innerHTML = state;

};
