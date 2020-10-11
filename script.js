document.addEventListener("DOMContentLoaded", function() {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  
//   $.when($.ajax(enable_navbar())).then(function () {
//     document.getElementById("about_me").click();
//   });

//   function enable_navbar(){
//   var nav_options = ["about_me", "projects", "experience", "skills"];
//   var opt;
//   for (opt in nav_options) {
//     console.log(opt, nav_options[opt]);
//     console.log(document.getElementById(nav_options[opt]));
//     if (document.getElementById(nav_options[opt])) {
//       document
//         .getElementById(nav_options[opt])
//         .onclick = load_content(nav_options[opt]);
//       // document.getElementById(nav_options[opt]).onclick = displayDate;
//     }
//   }
//   }
//     function load_content(content_id) {
//       var content = document
//         .getElementById("content");
// // content.innerHTML = '';
//           console.log(content_id + ".html");
//           $(function() {
//             $("#content").load(content_id + ".html");
//           });
//           //validation code to see State field is mandatory.
//         }
   
});
