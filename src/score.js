let scoretext = document.getElementById("score");
let value = localStorage.getItem("score");
scoretext.textContent=value;

let playBtn = document.getElementById("playbtn");
let playBtn1 = document.getElementById("playbtn2");
let hoverSound = document.getElementById("hover-sound");
let clickSound = document.getElementById("click-sound");
let click2Sound = new Audio ("../Assets/ScorePageAssets/CJAudio.MP3")
playBtn.addEventListener("mouseenter", ()=>{
    hoverSound.play();
})
playBtn.addEventListener("mouseleave",()=>{
    hoverSound.pause();
    hoverSound.currentTime=0;
})
playBtn1.addEventListener("mouseenter", ()=>{
    hoverSound.play();
})

playBtn1.addEventListener("mouseleave",()=>{
    hoverSound.pause();
    hoverSound.currentTime=0;
})


playBtn1.addEventListener("click", ()=>{
    clickSound.play();
    clickSound.currentTime=0;

})
clickSound.addEventListener("ended", function(){
    window.location.href="../pages/gamescreen.html";
})
click2Sound.addEventListener("ended", function(){
    window.location.href="../pages/game.html";
});
function handleButtonClick(){
    click2Sound.play();
    click2Sound.currentTime = 0;

}
playBtn.addEventListener("click", handleButtonClick)
