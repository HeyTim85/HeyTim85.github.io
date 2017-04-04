// JavaScript source code
function validateForm() {
    var x = document.forms["First Name"]["Last Name"]["valid email"]["Situation"].value;
    if (x == "") {
        alert("All information must be filled out");
        return false;
    }
}