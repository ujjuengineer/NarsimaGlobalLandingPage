// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  const links = navLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
      }
    });
  });
});

function sendMail(event){
    event.preventDefault(); // Prevent form from submitting normally

    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };

    emailjs.send("service_o7krp5l", "template_pcazqis", parms)
      .then(function(response) {
        alert("Email sent!!");
      }, function(error) {
        alert("Failed to send email.");
      });
}
