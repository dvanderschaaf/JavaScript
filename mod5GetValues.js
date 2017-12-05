function GetValues() {
  var fname = (document.getElementById("fname").value)
  var lname = (document.getElementById("lname").value)
  var address = (document.getElementById("address").value)
  var city = (document.getElementById("city").value)
  var state = (document.getElementById("state").value)

  console.log(fname + ', ' + lname + ', ' + address + ', ' + city + ', ' + state);
};
