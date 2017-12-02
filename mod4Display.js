function displayBelow() {
  var name = (document.getElementById("stringToDisplay1").value)
  var color = (document.getElementById("stringToDisplay2").value)
  var date = new Date();
  var week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednesday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";
  var day = week[date.getDay()];

  document.getElementById('displayHere').innerHTML = "Hello " + name + "! " + color +
   " is a great color. Have good " + day + "."
};
