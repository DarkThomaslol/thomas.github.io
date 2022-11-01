// language options
function nlFunctionlng() {
  document.getElementById("nlbtn").style.backgroundColor = "rgb(107, 111, 143)";
  document.getElementById("enbtn").style.backgroundColor = "rgb(14, 18, 48)";

  var nlBool = true;
  sessionStorage.setItem("nlBool", nlBool);
}

function enFunctionlng() {
  document.getElementById("enbtn").style.backgroundColor = "rgb(107, 111, 143)";
  document.getElementById("nlbtn").style.backgroundColor = "rgb(14, 18, 48)";

  var nlBool = false;
  sessionStorage.setItem("nlBool", nlBool);
}

// makes it clear in the sidebar that you start at which page
function startHomePage() {
  document.getElementById("homebtn").value = "\u2192 Home";

  // var nlBoollng = sessionStorage.getItem("nlBool");
  // console.log(nlBoollng);

  // if (nlBoollng) {
  //   document.getElementById("nlbtn").style.backgroundColor = "rgb(107, 111, 143)";
  //   document.getElementById("enbtn").style.backgroundColor = "rgb(14, 18, 48)";
  // }
  // else {
  //   document.getElementById("enbtn").style.backgroundColor = "rgb(107, 111, 143)";
  //   document.getElementById("nlbtn").style.backgroundColor = "rgb(14, 18, 48)";
  // }
}

function startAboutPage() {
  document.getElementById("aboutbtn").value = "\u2192 About me";
}

function startProjectPage() {
  document.getElementById("projectsbtn").value = "\u2192 Projects";

  document.getElementById("projectsDropdownbtn").style.borderBottomRightRadius = "10px";
  document.getElementById("projectsDropdownbtn").style.borderBottomLeftRadius = "10px";

  document.getElementById("projectsDropdownbtnOne").style.borderBottomRightRadius = "10px";
  document.getElementById("projectsDropdownbtnOne").style.borderBottomLeftRadius = "10px";
}

function startSchoolProjectPage() {
  document.getElementById("schoolProjectsbtn").value = "\u2192 School Projects";

  document.getElementById("schoolProjectsDropdownbtn").style.borderBottomRightRadius = "10px";
  document.getElementById("schoolProjectsDropdownbtn").style.borderBottomLeftRadius = "10px";

  document.getElementById("schoolProjectsDropdownbtnOne").style.borderBottomRightRadius = "10px";
  document.getElementById("schoolProjectsDropdownbtnOne").style.borderBottomLeftRadius = "10px";
}

function startContactPage() {
  document.getElementById("contactbtn").value = "\u2192 Contact Me";
}

// bool to make the menu button also close the sidebar
let boolnav = true;

const navChanger = () => {
  if (boolnav) {
    openNav();
  }
  else {
    closeNav();
  }
}

// Sets the width of the sidebar and left margin to 250px. also makes the title smaller
function openNav() {
  boolnav = !boolnav;
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("homeTitle").style.fontSize = "270px";
}

// Set the width of the sidebar and left margin to 0. aslo makes the title the normal size again
function closeNav() {
  boolnav = !boolnav;
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("homeTitle").style.fontSize = "350px";
}

// Makes the arrow bigger and another color
const animArrowPlay = () => {
  document.getElementById("arrowbtn").style.color = "rgb(107, 111, 143)";
  document.getElementById("arrowbtn").style.fontSize = "200px";
}

// Puts the arrow back to normal
const animArrowStop = () => {
  document.getElementById("arrowbtn").style.color = "rgb(14, 18, 48)";
  document.getElementById("arrowbtn").style.fontSize = "150px";
}

function removeHrefLink() {
  // Changes current URL
  const nextURL = 'file:///D:/School/Sintlucas/Leerjaar%202/project%20dev/periode%205/template/index.html';
  const nextTitle = 'blub';
  const nextState = { additionalInformation: 'URL is normal again' };

  // This will create a new entry in the browser's history, without reloading
  window.history.pushState(nextState, nextTitle, nextURL);

  // This will replace the current entry in the browser's history, without reloading
  window.history.replaceState(nextState, nextTitle, nextURL);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function lngDropdownbtn() {
  document.getElementById("lngDropdown").classList.toggle("lngDropdownShow");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.languagebtn')) {
    var dropdowns = document.getElementsByClassName("lngDropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('lngDropdownShow')) {
        openDropdown.classList.remove('lngDropdownShow');
      }
    }
  }
}

// projects: appformat
let boolProjects = true;

function projectsDropdownbtn() {
  boolProjects = !boolProjects;
  document.getElementById("projectsDropdown").classList.toggle("projectsDropdownShow");

  if (boolProjects) {
    document.getElementById("projectsDropdownbtn").value = "\u21D3 The Appformat experiment";
    document.getElementById("projectsDropdownbtn").style.borderBottomRightRadius = "10px";
    document.getElementById("projectsDropdownbtn").style.borderBottomLeftRadius = "10px";
  }
  else {
    document.getElementById("projectsDropdownbtn").value = "\u21D1 The Appformat experiment";
    document.getElementById("projectsDropdownbtn").style.borderBottomRightRadius = "";
    document.getElementById("projectsDropdownbtn").style.borderBottomLeftRadius = "";
  }

}

// projects: java webgame
let boolProjectsOne = true;

function projectsDropdownbtnOne() {
  boolProjectsOne = !boolProjectsOne;
  document.getElementById("projectsDropdownOne").classList.toggle("projectsDropdownShowOne");

  if (boolProjectsOne) {
    document.getElementById("projectsDropdownbtnOne").value = "\u21D3 The Java webgame";
    document.getElementById("projectsDropdownbtnOne").style.borderBottomRightRadius = "10px";
    document.getElementById("projectsDropdownbtnOne").style.borderBottomLeftRadius = "10px";
  }
  else {
    document.getElementById("projectsDropdownbtnOne").value = "\u21D1 The Java webgame";
    document.getElementById("projectsDropdownbtnOne").style.borderBottomRightRadius = "";
    document.getElementById("projectsDropdownbtnOne").style.borderBottomLeftRadius = "";
  }

}

// school: bootstrap website
let boolSchoolProjects = true;

function schoolProjectsDropdownbtn() {
  boolSchoolProjects = !boolSchoolProjects;
  document.getElementById("schoolProjectsDropdown").classList.toggle("schoolProjectsDropdownShow");

  if (boolSchoolProjects) {
    document.getElementById("schoolProjectsDropdownbtn").value = "\u21D3 Bootstrap website";
    document.getElementById("schoolProjectsDropdownbtn").style.borderBottomRightRadius = "10px";
    document.getElementById("schoolProjectsDropdownbtn").style.borderBottomLeftRadius = "10px";
  }
  else {
    document.getElementById("schoolProjectsDropdownbtn").value = "\u21D1 Bootstrap website";
    document.getElementById("schoolProjectsDropdownbtn").style.borderBottomRightRadius = "";
    document.getElementById("schoolProjectsDropdownbtn").style.borderBottomLeftRadius = "";
  }

}

// school: webshop
let boolSchoolProjectsOne = true;

function schoolProjectsDropdownbtnOne() {
  boolSchoolProjectsOne = !boolSchoolProjectsOne;
  document.getElementById("schoolProjectsDropdownOne").classList.toggle("schoolProjectsDropdownShowOne");

  if (boolSchoolProjects) {
    document.getElementById("schoolProjectsDropdownbtnOne").value = "\u21D3 Webshop";
    document.getElementById("schoolProjectsDropdownbtnOne").style.borderBottomRightRadius = "10px";
    document.getElementById("schoolProjectsDropdownbtnOne").style.borderBottomLeftRadius = "10px";
  }
  else {
    document.getElementById("schoolProjectsDropdownbtnOne").value = "\u21D1 Webshop";
    document.getElementById("schoolProjectsDropdownbtnOne").style.borderBottomRightRadius = "";
    document.getElementById("schoolProjectsDropdownbtnOne").style.borderBottomLeftRadius = "";
  }

}