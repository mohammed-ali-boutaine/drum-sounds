/*  
    Simple Drum Kit
*/

// Get drum buttons from the document
let drums = document.querySelectorAll(".drum");

// Create sound objects for each drum
let audio1 = new Audio("./sounds/crash.mp3");
let audio2 = new Audio("./sounds/kick-bass.mp3");
let audio3 = new Audio("./sounds/snare.mp3");
let audio4 = new Audio("./sounds/tom-1.mp3");
let audio5 = new Audio("./sounds/tom-2.mp3");
let audio6 = new Audio("./sounds/tom-3.mp3");
let audio7 = new Audio("./sounds/tom-4.mp3");

// Map drum letter to corresponding sound object
let objSounds = {
  w: audio1,
  a: audio2,
  s: audio3,
  d: audio4,
  j: audio5,
  k: audio6,
  i: audio7,
};

// Function to play a sound based on the input letter
function playSound(sound) {
  switch (sound) {
    case "w":
      objSounds.w.play();
      animateButton(drums[0]);
      break;
    case "a":
      objSounds.a.play();
      animateButton(drums[1]);
      break;
    case "s":
      objSounds.s.play();
      animateButton(drums[2]);
      break;
    case "d":
      objSounds.d.play();
      animateButton(drums[3]);
      break;
    case "j":
      objSounds.j.play();
      animateButton(drums[4]);
      break;
    case "k":
      objSounds.k.play();
      animateButton(drums[5]);
      break;
    case "i":
      objSounds.i.play();
      animateButton(drums[6]);
      break;
  }
}

// Event listener for click on drum buttons
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    const drumLetter = this.innerHTML;
    playSound(drumLetter);
  });
}

// Event listener for keydown (press on keyboard)
document.addEventListener("keydown", function (e) {
  playSound(e.key);
});

// Function to add animation to the pressed drum button
function animateButton(button) {
  button.style.opacity = "0.8";
  setTimeout(() => {
    button.style.opacity = "1";
  }, 300);
}
