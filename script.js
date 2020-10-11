
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


  let projects = {
    bare: {
      title: "BARE ESSENTIALS APP",
      desc:
        "A solution to know the availability of items in nearby shops during Corona times.",
      lang: "JAVA, ANDROID, FIRESTORE, MAPS API"
    },
    cnn: {
      title: "PARALLELISING CNN",
      desc:
        "To run CNNs faster by parallelising the C code using OpenMP(BLAS operations and unrolling)",
      lang: "C, C++, OPENMP"
    },
    fifth: {
      title: "5TH PILLAR HYDERABAD WEBSITE",
      desc:
        "A portal to view happenings of the Hyderabad 5th Pillarchapter and post grievances anonymously, which areforwarded to the respective division to resolve",
      lang: "PHP, HTML, CSS"
    },
    shell: {
      title: "A LINUX SHELL",
      desc:
        "A shell which executes basic commands with pipes, I/O redirection, history, aliases, .myrc, etc.",
      lang: "C, C++"
    },
    art: {
      title: "ART GENERATION WITH NEURAL STYLE TRANSFER",
      desc:
        "Creates artistic image using the two given pictures using CNN by extracting content and style and recombining them.",
      lang: "PYTHON, TENSORFLOW"
    }
  };
  let projects_parent = document.getElementById("projects");
  function display_content(projects, project_parent) {
    projects_parent.innerHTML = "";
    for (let project in projects) {
      let project_child = document.createElement("div");

      project_child.classList.add("project", "card", "shadow-lg", "bg-white", "mb-3");
      project_child.id = project;
      let card_header = document.createElement("div");
      card_header.className = "card-header";
      card_header.innerHTML = projects[project]["title"];
      let card_body = document.createElement("div");
      card_body.className = "card-body";
      let card_title = document.createElement("h6");
      card_title.className = "card-title";
      card_title.innerHTML = projects[project]["desc"];
      let card_desc = document.createElement("p");
      card_desc.className = "card-text";
      card_desc.innerHTML = projects[project]["lang"];
      card_body.appendChild(card_title);
      card_body.appendChild(card_desc);
      project_child.appendChild(card_header);
      project_child.appendChild(card_body);
      project_parent.appendChild(project_child);
    }
  }
  
  let experience = {
    bare: {
      title: "INTERVIEWBIT, SOFTWARE DEVELOPMENT INTERN",
      desc: "<ul><li>Developed a dashboard to monitor mentors' performance (leaderboard, graphs, etc) on the admin side</li><li>Feature to scheduling Interviews based on mentor's and mentee's convinience (A/B testing also)</li><li>Presented ideas to other teams (classroom and sales) to tackle some of the existing problems like improve student participation and turn out and many others, few of them were implemented and showed an improvement. (ideas along with the required reasearch papers to support the idea)</li><li>Analysed the feedback from mentor and mentee about the Mentee-Mentor session and improvised the session productivity.</li><li> Displayed video recording of Mentee-Mentor session, calculated various stats and analysed usefulness of the feature.</li> </ul>",
      lang: "JavaScript, React, Ruby on Rails",
    },
    cnn: {
      title: "BEINGZERO, SOFTWARE DEVELOPMENT INTERN",
      desc:
        "<ul><li>Built the following projects for assisting in system design course :  mini-YouTube, Coding platform, mini-Instagram, ToDo app</li><li>Google Add-on to automate sending custom emails in bulk.</li><li>Built a Chrome extension to share unlisted videos in the playlist to the given email IDs. </li></ul>",
      lang: "JavaScript, Google AppsScript, Node.js"
    },
    fifth: {
      title: "IIIT-HYDERABAD, TEACHING ASSISTANT",
      desc: "<ul><li>Teaching Assistant under Prof CV Jawahar, for Statistical Methods in Artificial Intelligence course.</li></ul>",
      lang: "Python, TensorFlow, Pandas"
    }
  };
  let experience_parent = document.getElementById("experience");
  if(projects_parent){
    display_content(projects, projects_parent);
  }else{
    display_content(experience, experience_parent);
  }
});