function reverseString() {
  for(count = 0; count < 1; count++){
      rev = document.getElementById("stringToReverse").value.split("").reverse().join("");
      console.log(rev);
      document.getElementById("stringReverseOutput").value=(rev);
   };
};
