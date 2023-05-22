function allClass() {
    window.location = "index.html";
}

function classQuiz() {
    window.location = "quiz.html";
}

function profile(){
    window.location = "profile.html";
}

function quiz1(){
    window.location.href = ""
}

function quiz2(){
    window.location.href = ""
}

function quiz3(){
    window.location.href = ""
}

function quiz4(){
    window.location.href = ""
}

function quiz5(){
    window.location.href = ""
}

function quiz6(){
    window.location.href = ""
}

function quiz7(){
    window.location.href = ""
}

function quiz8(){
    window.location.href = ""
}

function quiz9(){
    window.location.href = ""
}

function quiz10(){
    window.location.href = ""
}

function quiz11(){
    window.location.href = ""
}

function quiz12(){
    window.location.href = ""
}

function quiz13(){
    window.location.href = ""
}

function quiz14(){
    window.location.href = ""
}

function quiz15(){
    window.location.href = ""
}

function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
  }
  setInterval(updateTime, 1000); // Update every second

function logOut(){
    window.location = "login.html"
}

function cert(){
    window.location = "cert.html"
}

function openCert1(){
    window.location.href = "joining_cert.pdf"
}
function openCert2(){
    window.location.href = "course_cert.pdf"
}

function reportCard(){
    window.location = "report.html"
}

function openGmailAndCompose() {
    // Specify the email address for the draft
    var email = "isrtd.company@gmail.com";

    // Compose the URL with the email address
    var url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email);

    // Open Gmail in a new tab
    window.open(url);
  }

  // Attach the click event listener to the button
  var composeButton = document.getElementById("composeButton");
  composeButton.addEventListener("click", openGmailAndCompose);