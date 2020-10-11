document.addEventListener('DOMContentLoaded', function() {
$(function() {
    $("#navbar").load("nav.html");
  });

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  var nav_options = ["about_me", "projects", "experience", "skills"]
  var opt
  for (opt in nav_options) {
  document.getElementById(opt).addEventListener('click',function ()
{
    console.log(opt+".html");
  $(function() {
    $("#content").load(opt+".html");
  });
 //validation code to see State field is mandatory.  
}  ); 
  }


});