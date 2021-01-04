// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBarOnClick() {
  var x = document.getElementById("navigation");
  if (x.className === "navigation") {
      x.className += " responsive";
  } else {
      x.className = "navigation";
  }
}


/* LOADER ICON */
var loader;
function loadNow(opacity) {
  if (opacity <= 0) {
      displayContent();
  } else {
      loader.style.opacity = opacity;
      window.setTimeout(function() {
          loadNow(opacity - 0.05);
      }, 50);
  }
}

function displayContent() {
  loader.style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  loader = document.getElementById('loader');
  loadNow(1);
});