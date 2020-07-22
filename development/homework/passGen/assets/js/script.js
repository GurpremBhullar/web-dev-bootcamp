function RandPassGenerator() {

    var passLength = prompt("has to be atleast 6 characters and no more than 12");

    if (passLength >= 6 && passLength <= 12) {
        var newPasswordLength = parseInt(passLength);
    
    var conUppercase = confirm("Does your password contain Uppercase Letters?");
    var conLowercase = confirm("Does your password contain Lowercase Letters?");
    var conNumbers = confirm("Does your password contain Contain Numbers?");
    var conSpecial = confirm("Does your password contain Special Characters?");

    var newPasswordLength;

    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
