// RETREIVING THE ELEMENTS
let logged__in = document.getElementById("account_name");
let value = localStorage.getItem("account");
console.log(value);

// TO CHECK IF THE VALUE IS NOT NULL
if (value) {
  logged__in.textContent = value;
}
// AUDIO FOR BACKGROUND
document.addEventListener("DOMContentLoaded", function () {
  let bgAudio = new Audio("../Assets/HomePageAssets/HomePageBgAudio.MP3");
  bgAudio.play();
  bgAudio.loop = true;
  bgAudio.volume = 1;
});
// ADDING CLICK AND HOVER SOUND FOR GAME BUTTONS 
let newgameBtn = document.getElementById("newgameBtn");
let loadgameBtn = document.getElementById('loadgameBtn');
let hoverSound = new Audio("../Assets/HomePageAssets/HomePageHoverAudio.MP3");
let clickSound = new Audio("../Assets/HomePageAssets/HomePageClickAudio.MP3")
// let clickSound = new Audio("./mainmenuaudio.MP3")

// FUNCTIONS FOR CLICK AND HOVER
newgameBtn.addEventListener("mouseenter", ()=>{
  hoverSound.play();
})
newgameBtn.addEventListener("mouseleave",()=>{
  hoverSound.pause();
  hoverSound.currentTime=0;
})
loadgameBtn.addEventListener("mouseenter", ()=>{
  hoverSound.play();
})
loadgameBtn.addEventListener("mouseleave",()=>{
  hoverSound.pause();
  hoverSound.currentTime=0;
})
newgameBtn.addEventListener("click", ()=>{
  clickSound.play();
  clickSound.currentTime=0;
})
loadgameBtn.addEventListener("click", ()=>{
  clickSound.play();
  clickSound.currentTime=0;
})
creditsBtn.addEventListener("mouseenter", ()=>{
  hoverSound.play();
})
creditsBtn.addEventListener("mouseleave",()=>{
  hoverSound.pause();
  hoverSound.currentTime=0;
})
creditsBtn.addEventListener("click", ()=>{
  clickSound.play();
  clickSound.currentTime=0;
})
quitBtn.addEventListener("mouseenter", ()=>{
  hoverSound.play();
})
quitBtn.addEventListener("mouseleave",()=>{
  hoverSound.pause();
  hoverSound.currentTime=0;
})
quitBtn.addEventListener("click", ()=>{
  clickSound.play();
  clickSound.currentTime=0;
})
