function CalculateTriangle() {
  var height = Number((document.getElementById("height").value));
  var base = Number((document.getElementById("base").value));

  var calcArea = ((height * base) * .5);
  document.getElementById("area").value = calcArea;

};
