// GET THE FORM ELEMENT
let form=document.querySelector("form");
// GET THE INPUT AND PROCEED BUTTON
let accountInput = document.querySelector("#login-name");
let proceedBtn = document.getElementById("proceedbtn");
console.log("accountInput: ", accountInput);
// <--------------------------->//

// HANDLE THE ENTER KEY EVENT
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent the default behavior of the Enter key 
    let accountValue = accountInput.value;
    localStorage.setItem("account", accountValue);
    window.location.href = "../pages/gamescreen.html"; //Navigate to the gamescreen
  }
});

// LOGIN SUBMISSION EVENT
proceedBtn.addEventListener("click", (e) => {
  e.preventDefault();//Prevent Form Submisssion
  let accountValue = accountInput.value;//Get Account Input Value
  if (accountValue===""){
    alert("Please Enter Your Name Before Proceeding ")
  }else{
  localStorage.setItem("account", accountValue);
  window.location.href = "../pages/gamescreen.html";
  }
});

// ADDING THE MAIN BACKGROUND MUSIC
document.addEventListener("DOMContentLoaded", function () {
  let bgAudio = new Audio("../Assets/LoginPageAssets/LoginPageBgAudio.MP3");
  bgAudio.play();
  bgAudio.loop = true;
  bgAudio.volume = 1;
});

// ADDING THE CLICKING AUDIO WHEN THE USER CLICKS ON THE PROCEED BUTTON
let clickAudio = new Audio("../Assets/LoginPageAssets/LoginPageClickSound.MP3");
function handleButtonClick() {
  clickAudio.play();
  clickAudio.currentTime = 0;
}
proceedBtn.addEventListener("click", handleButtonClick);
//
