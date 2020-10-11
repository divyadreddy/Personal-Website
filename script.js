document.addEventListener("DOMContentLoaded", function() {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var nav_options = ["about_me", "projects", "experience", "skills"];
  var opt;
  for (opt in nav_options) {
    console.log(opt, nav_options[opt]);
    console.log(document.getElementById(nav_options[opt]));
    if (document.getElementById(nav_options[opt])) {
      document
        .getElementById(nav_options[opt])
        .addEventListener("click", function() {
          console.log(nav_options[opt] + ".html");
          $(function() {
            $("#content").load(nav_options[opt] + ".html");
          });
          //validation code to see State field is mandatory.
        });
      // document.getElementById(nav_options[opt]).onclick = displayDate;
    }
  }
  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
});
