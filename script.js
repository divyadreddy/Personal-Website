// document.addEventListener("DOMContentLoaded", function() {
//   function change_nav_display() {
//     var x = document.getElementById("navbar");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
//   $(function() {
//     $("#navbar").load("nav.html");
//   });
//   $(".navbar").click(function() {
//     $(".nav li.active").removeClass("active");
//     $(this).addClass("active");
//   });
// });

function change_to_home() {
  document.getElementById("content_1").src = "about_me.html";
}
function change_to_projects() {
  document.getElementById("content_1").src = "projects.html";
}
function change_to_exp() {
  document.getElementById("content_1").src = "experience.html";
}
function change_to_skills() {
  document.getElementById("content_1").src = "skills.html";
}
