/*  
        simple drum kit 
*/
//get drums (buttons)
let drums = document.querySelectorAll(".drum");

// create sound ojetcs
let audio1 = new Audio("./sounds/crash.mp3");
let audio2 = new Audio("./sounds/kick-bass.mp3");
let audio3 = new Audio("./sounds/snare.mp3");
let audio4 = new Audio("./sounds/tom-1.mp3");
let audio5 = new Audio("./sounds/tom-2.mp3");
let audio6 = new Audio("./sounds/tom-3.mp3");
let audio7 = new Audio("./sounds/tom-4.mp3");

// put object in object based on a letter
let objSoundes = {
  w: audio1,
  a: audio2,
  s: audio3,
  d: audio4,
  j: audio5,
  k: audio6,
  i: audio7,
};

// create a function tat take letter and play sound
function playSound(sound) {

  switch (sound) {
    case "w":
      objSoundes.w.play();
      AnimationListter(drums[0])
      break;
    case "a":
      // audio2.play();
      objSoundes.a.play();
      AnimationListter(drums[1])


      break;
    case "s":
      objSoundes.s.play();
      AnimationListter(drums[2])

      break;
    case "d":
      objSoundes.d.play();
      AnimationListter(drums[3])

      break;
    case "j":
      objSoundes.j.play();
      AnimationListter(drums[4])

      break;
    case "k":
      objSoundes.k.play();
      AnimationListter(drums[5])

      break;
    case "i":
      objSoundes.i.play();
      AnimationListter(drums[6])

      break;
  }
}


// add eventListner click on all buttons 
for (let i = 0; i < drums.length; i++) {  // loop through drums
  drums[i].addEventListener("click", function(){
    const drumLiter = this.innerHTML;
    playSound(drumLiter)
  });
}


// add eventListner keydown (press on keyboard ) on all buttons 

document.addEventListener("keydown",function(e){
playSound(e.key)
})







//
function AnimationListter(litter){


  litter.style.opacity="0.8";
  setTimeout(()=>{litter.style.opacity="1"},300)
}



