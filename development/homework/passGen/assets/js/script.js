var input 
var confirmNumber 
var confirmSpecAscii
var confirmUpperCase 
var confirmLowerCase 
var pwCriteria

var number ="1234567890".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("") 
var specAscii = "!#$%&()*+,-./:;<=>?@[\]^_{|}~".split("")

var generateBtn = document.querySelector("#generate"); 
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", function () {
  var password = generatePassword(); 
  passwordText.textContent = password;
});

function generatePassword() {

  input= prompt("Please choose a length between 8 and 128 characters for your password");

  if (!input) {
    alert("Value needed");
  }

  else if (input < 8 || input > 128) {
    prompt("Please choose between 8 and 128");
  }  

  else {
    confirmNumber= confirm("are your using password contain numbers?");
    confirmSpecAscii= confirm("are you using password contain special characters?"); 
    confirmUpperCase= confirm("are you using password contain uppercase letters?");
    confirmLowerCase= confirm("are you using password contain lowercase letters?");
  }; 

  if (!confirmNumber && !confirmSpecAscii && !confirmUpperCase && !confirmLowerCase) {
    pwCriteria= alert("choose atleast one");
  } 

  else if (confirmNumber && confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria= number.concat(specAscii,upperCase,lowerCase);
  }

  else if (confirmNumber && confirmSpecAscii && confirmUpperCase && !confirmLowerCase) {
    pwCriteria= number.concat(specAscii,upperCase);
  }
  else if (confirmNumber && confirmSpecAscii && !confirmUpperCase && confirmLowerCase) {
    pwCriteria= number.concat(specAscii,lowerCase);
  }
  else if (confirmNumber && !confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria= number.concat(upperCase,lowerCase);
  } 
  else if (!confirmNumber && confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria= specAscii.concat(upperCase,lowerCase);
  } 
  
  else if (confirmNumber && confirmSpecAscii && !confirmUpperCase && !confirmLowerCase) {
    pwCriteria = number.concat(specAscii);
  }
  else if (confirmNumber && !confirmSpecAscii && confirmUpperCase && !confirmLowerCase) {
    pwCriteria = number.concat(upperCase);
  }
  else if (!confirmNumber && confirmSpecAscii && confirmUpperCase && !confirmLowerCase) {
    pwCriteria = specAscii.concat(upperCase);
  }
  else if (!confirmNumber && confirmSpecAscii && !confirmUpperCase && confirmLowerCase) {
    pwCriteria =specAscii.concat(lowerCase);
  }
  else if (!confirmNumber && !confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria = upperCase.concat(lowerCase);
  }
   else if (confirmNumber && !confirmSpecAscii && !confirmUpperCase && confirmLowerCase) {
    pwCriteria = number.concat(lowerCase);
  }

  else if (confirmNumber && !confirmSpecAscii && !confirmUpperCase && !confirmLowerCase) {
    pwCriteria = number;
  } 
  else if (!confirmNumber && confirmSpecAscii && !confirmUpperCase && !confirmLowerCase) {
    pwCriteria = specAscii;
  } 
  else if (!confirmNumber && !confirmSpecAscii && confirmUpperCase && !confirmLowerCase) {
    pwCriteria = upperCase;
  } 
  else if (!confirmNumber && !confirmSpecAscii && !confirmUpperCase && confirmLowerCase) {
    pwCriteria = lowerCase;
  }; 
  
 
  var pal = [];
  
  for (var i = 0; i < input; i++) {
    var inputChoices = pwCriteria [Math.floor(Math.random() * pwCriteria.length)];
      pal.push(inputChoices); 
      }
    var password= pal.join("");
    writePassword(password);
    return password;
  
function writePassword (pal) {

}
}