function sortNumbers() {
    //sort numbers from form and display in alert box
    var num1 = document.getElementById('firstNumberInput').value;
    var num2 = document.getElementById('secondNumberInput').value;
    var num3 = document.getElementById('thirdNumberInput').value;
    var txt = "From smallest to largest ";

    //verify only numbers
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      alert("Please enter only numbers.");
    } else {
      //verify numbers are unique
      if (num1 == num2 || num2 == num3 || num1 == num3) {
        alert("Please enter unique numbers.");
      } else{
        if (num1 < num2 && num1 < num3 && num2 < num3) {
          alert(txt + num1 + ', ' + num2 + ', ' + num3);
        } else if (num1 < num2 && num1 < num3 && num3 < num2) {
          alert(txt + num1 + ', ' + num3 + ', ' + num2,);
        }else if (num2 < num1 && num2 < num3 && num1 < num3) {
          alert(txt + num2 + ', ' + num1 + ', ' + num3);
        } else if (num2 < num1 && num2 < num3 && num3 < num1) {
          alert(txt + num2 + ', ' + num3 + ', ' + num1);
        }else if (num3 < num1 && num3 < num2 && num1 < num2) {
          alert(txt + num3 + ', ' + num1 + ', ' + num2);
        }else {
          alert(txt + num3 + ', ' + num2 + ', ' + num1);
        }
      }
    }
};
