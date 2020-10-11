document.addEventListener("DOMContentLoaded", function() {
  function change_nav_display() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  $(function() {
    $("#navbar").load("nav.html");
  });
  $(".navbar").click(function() {
    $(".nav li.active").removeClass("active");
    $(this).addClass("active");
  });
});
