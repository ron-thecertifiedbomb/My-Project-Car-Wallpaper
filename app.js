function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink", "tablink2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


var thumb1 = document.getElementById("thumb1");
var thumb1Src = document.getElementById("thumb1").src;
var thumb2 = document.getElementById("thumb2");
var thumb2Src = document.getElementById("thumb2").src;
var thumb3 = document.getElementById("thumb3");
var thumb3Src = document.getElementById("thumb3").src;
var thumb4 = document.getElementById("thumb4");
var thumb4Src = document.getElementById("thumb4").src;

thumb1.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb1Src
})
thumb2.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb2Src
})
thumb3.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb3Src
})
thumb4.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb4Src
})


var thumb5 = document.getElementById("thumb5");
var thumb5Src = document.getElementById("thumb5").src;
var thumb6 = document.getElementById("thumb6");
var thumb6Src = document.getElementById("thumb6").src;
var thumb7 = document.getElementById("thumb7");
var thumb7Src = document.getElementById("thumb7").src;
var thumb8 = document.getElementById("thumb8");
var thumb8Src = document.getElementById("thumb8").src;

thumb5.addEventListener("click", function () {
  document.getElementById("mainImgTwo").src = thumb5Src
})
thumb6.addEventListener("click", function () {
  document.getElementById("mainImgTwo").src = thumb6Src
})
thumb7.addEventListener("click", function () {
  document.getElementById("mainImgTwo").src = thumb7Src
})
thumb8.addEventListener("click", function () {
  document.getElementById("mainImgTwo").src = thumb8Src
})


const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");


document.onclick = function (e) {
  if (e.target.id !== "hamburger" && e.target.id !== "hamburger-menu") {
    hamburger.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  }
}



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
})



var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}