const paragraphs = document.querySelectorAll(".section_paragraph");

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("section_paragraph--visible");
        }
    });
});


function isInView(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 && rect.top < 
        (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}


// window.addEventListener('load', function() {
//     var audio = document.getElementById('background-music');
//     audio.play().catch(error => {
//       console.error('Auto-play prevented:', error);
//     });
//   });


var container = document.getElementById("falling-container");

for (var i = 0; i < 30; i++) {
  var petal = document.createElement("div");
  petal.className = "falling leaf";

  // Randomize size
  var size = Math.random() * 20 + 15; // Between 15px and 35px
  petal.style.width = size + "px";
  petal.style.height = (size * 1.2) + "px"; // Slightly elongated for petals

//   Randomize position and animation
// Kind of had to utilize some ai for the randomization
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Random speed
  petal.style.animationDelay = Math.random() * 5 + "s"; // Random delay

  // Randomize color
  petal.style.background = "#ffffff";

  container.innerHTML += petal.outerHTML;
}