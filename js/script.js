var schoolName = "ABC School";
var totalStudents = 1200;
var currentYear = new Date().getFullYear();

var clubs = [
    "Science Club",
    "Debate Club",
    "Sports Club",
    "ICT Club",
    "Cultural Club"
];

function displayClubs(){
    var list = document.getElementById("clublist");

    if(list == null){
        return;
    }
    list.innerHTML = "";

    for(var i=0; i<clubs.length;i++){
        list.innerHTML += "<li>" + clubs[i] + "</li>";
    }
}


function showWelcome(){
    alert("Welcome to " + schoolName + "!");
}

function calculateAge(){
    var dob = document.getElementById("dob").value;

    if(dob == ""){
        return -1;
    }
    var birth = new Date(dob);
    var today = new Date();

    var age = today.getFullYear() - birth.getFullYear();

    return age;
}
function clearForm(){
    var form = document.getElementById("admissionForm");

    if(form){
        form.reset();
    }
}

function digitalClock(){

    const now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(second < 10){
        second = "0" + second;
    }

    const clock = document.getElementById("clock");

    if(clock){
        clock.textContent = hour + ":" + minute + ":" + second;
    }

}
digitalClock();
setInterval(digitalClock, 1000);

function greeting(){

    const now = new Date();

    const hour = now.getHours();

    let message;

    if(hour >= 6 && hour < 12){
        message = "Good Morning!";
    }
    else if(hour >= 12 && hour < 17){
        message = "Good Afternoon!";
    }
    else if(hour >= 17 && hour < 20){
        message = "Good Evening!";
    }
    else{
        message = "Good Night!";
    }

    const greet = document.getElementById("greeting");

    if(greet){
        greet.textContent = message;
    }

}
greeting();



//form validation
function validateAdmissionForm(){

    var name = document.getElementById("studentName").value.trim().toUpperCase();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirmPassword").value;

    if(name == ""){
        alert("Student Name is required.");
        return false;
    }

    if(email.indexOf("@") == -1){
        alert("Invalid Email.");
        return false;
    }

    if(phone.length != 11){
        alert("Phone number must be 11 digits.");
        return false;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters.");
        return false;
    }

    if(password != confirm){
        alert("Passwords do not match.");
        return false;
    }

    var age = Number(calculateAge());

    if(age < 5){
        alert("Not Eligible for Admission");
        return false;
    }

    alert("Admission Successful!");

    return true;
}