// Når brukeren scroller, utføres myFunction
window.onscroll = function() {myFunction()};

// Henter elementet header
var header = document.getElementById("header");

// Henter posisjonen som skal utlignes av headeren
var sticky = header.offsetTop;

// Legger til klassen sticky til headeren når man scroller
function myFunction() {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}