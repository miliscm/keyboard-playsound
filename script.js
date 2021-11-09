
function playSound (e){
    const audio = document.querySelector(`audio[data-key="${event.code}"]`)
    const key = document.querySelector(`.key[data-key="${event.code}"]`);
    console.log(key);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
}


function removeTransition(e){
    if(e.propertyName != "transform") return;
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key");

window.addEventListener('keydown',playSound)

keys.forEach((a) =>
 {
    a.addEventListener("transitionend",removeTransition)
 } 
)
