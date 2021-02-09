// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables//

var ucase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", " ", "$", " ", "%", " ", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var useUpper
var useLower
var useSpecial
var useNumbers
var passlength =8;
var genPass="";


var randomPassword = [];


  


function generatePassword(){
  for (i=0; i<passlength;i++){ console.log("text");
    genPass+= randomPassword[Math.floor(randomPassword.length*Math.random())];
  }

  ///if gen pass != character from "true" than reshuffle
  document.getElementById("password").innerHTML = genPass;
  
}






// Add event listener to generate button

generateBtn.addEventListener("click", function(){

  //Password Length//
  passlength= prompt("List the number of characters need in the password. The number needs to be between 8 and 128. ");
      if (passlength <8 || passlength >128 || isNaN(passlength)){
        return alert("Please try again.");
      }
       
      console.log(passlength)
  
//Password Uppercase//


  var passUpper = prompt("Do you want to include Uppercase letters in the password? Yes/No ");

      if (passUpper != "Yes" && passUpper != "No" && passUpper != "yes" && passUpper != "no"  ){
        return alert("Please try again.");
      }

      for(i=0; i<passlength;i++){
          if (passUpper.toLowerCase() === "yes"){
            useUpper = ucase[Math.floor(ucase.length * Math.random())];
              console.log(useUpper); 
            randomPassword.push(useUpper);
              console.log(randomPassword);  
      }
    }

      if (passUpper.toLowerCase() === "no" ){
        useUpper = ("");
        console.log(useUpper);
      }

//Password Lowercase//

  var passLower = prompt("Do you want to include Lowercase letters in the password? Yes/No ").toLowerCase();
  
    if (passLowerpassLower != "yes" && passLower != "no"  ){
        return alert("Please try again.");
      }
           
      for(i=0; i<passlength;i++){
        if (passLower === "yes"){
          useLower = lcase[Math.floor(lcase.length * Math.random())];
            console.log(useLower); 
          randomPassword.push(useLower);
            console.log(randomPassword);  
    }
  }
     if (passLower ==="no" ) {
        useLower = false("");
        console.log(useLower);
      }

//Password Number//

  var passNumb = prompt("Do you want to include numbers in the password? Yes/No ");
      if (passNumb != "Yes" && passNumb != "No" && passNumb != "yes" && passNumb != "no"  ){
        return alert("Please try again.");
      }

      for(i=0; i<passlength;i++){
        if (passNumb.toLowerCase() === "yes"){
          useNumbers = numbers[Math.floor(numbers.length * Math.random())];
            console.log(useNumbers); 
          randomPassword.push(useNumbers);
            console.log(randomPassword);  
    }
  }
      
     
    if (passNumb.toLowerCase() === "no" ) {
        useNumbers = ("");
        console.log(useNumbers);
      }

  //Password Special Character//
      

  var passChar = prompt("Do you want to include special characters in the password? Yes/No ");
      if (passChar != "Yes" && passChar != "No" && passChar != "yes" && passChar != "no"  ){
        return alert("Please try again.");
      }


      for(i=0; i<passlength;i++){
        if (passChar.toLowerCase() === "yes"){
          useSpecial = special[Math.floor(special.length * Math.random())];
            console.log(useSpecial); 
          randomPassword.push(useSpecial);
            console.log(randomPassword);  
    }
  }

    if (passChar.toLowerCase === "no" ) {
        useSpecial = ("");
        console.log(useSpecial);
      }
      generatePassword();

   }
)



