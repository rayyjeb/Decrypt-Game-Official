// ARRAY OF RANDOM WORDS
const words = [
    'TECHNOLOGY',
    'CYBER', 
    'SECURITY', 
    'MALWARE', 
    'FIREWALL', 
    'ANALYTICS',
    'ENCRYPTION', 
    'ROUTER', 
    'DATABASE', 
    'FRAMEWORK', 
    'BACKUP', 
    'CLOUD', 
    'SERVER', 
    'HARDWARE', 
    'SOFTWARE', 
    'NETWORK', 
    'ALGORITHM', 
    'DOMAIN', 
    'MINING', 
    'HOSTING', 
    'PROTOCOL', 
    'CACHE' 
];
// ARRAY OF HINTS IN ORDER WITH WORRDS
const hints = [
    "Application of Scientific Knowledge", 
    "Digital World and Online Security", 
    "Safety and Protection",
    "Harmful Software often Disguised", 
    "Digital Barrier that Protects Network",
    "Data Examination to Gain Insights",
    "Secret Code for your Data",
    "Device that directs and manages Data Traffic",
    "Digital filling Cabinet",
    "Structured Environment - Tools - Developers",
    "Safety Net for your Data",
    "Remote Storage and computing system",
    "Powehouse of a Network",
    "Physical Components of a computer",
    "Digital Instructions that tell a computer what to do",
    "Web of interconnected devices and Systems",
    "Step-By-Step set of Instructions",
    "Unique Address or Location",
    "Extracting Valuable Information",
    "Providing a Home for Websites",
    "Set of Rules and Conventions",
    "Temporarily holds frequently accessed Data"
];
// Initializing the score to 0 since the score starts from 0
let score = 0;
// Initializing the currentword index to 0
let currentWordIndex = 0;
// Storing the previoiusly displayed  scrambled words and hints
let displayedWordIndices = [];
let currentWord = getRandomWordAndHint();

// Retreiving from HTML
const jumbleWords = document.getElementById("encryptedwords");
const hintwords = document.getElementById("game__hint");
const guessinput = document.getElementById("input--guess");
const guessbtn = document.getElementById("guessbtn");

// SCRAMBLING THE LETTERS FORM THE RANDOM TEXT
function displayShuffledText(scrambledWords) {
    const array = scrambledWords.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}
// FUNCTION TO DISPLAY RANDOM WORDS AND HINTS
function getRandomWordAndHint() {
    // Ensure that all words have been displayed at least once
    if (displayedWordIndices.length === words.length) {
        displayedWordIndices = [];
    }
// RANDOMISE THE WORDS FROM THE GIVEN ARRAY 
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * words.length);
    } while (displayedWordIndices.includes(randomIndex));

    displayedWordIndices.push(randomIndex);

    return {
        word: words[randomIndex],
        hint: hints[randomIndex]
    };
}

// FUNCTION TO DISPLAY THE WORD AND THE HINTS TOGETHER
function displayNextWord() {
    currentWord = getRandomWordAndHint();
    const scrambledWords = displayShuffledText(currentWord.word);
    jumbleWords.innerHTML = scrambledWords;
    hintwords.innerHTML = currentWord.hint;
    guessinput.value = ''; // Clear the input field
}
// MAKING SCORES FUNCTIONAL AND STORING IT IN THE LOCAL STORAGE
let attempts = 0;
function checkGuess() {
    const guess = guessinput.value;
    if (guess === currentWord.word) {
        score++;
        localStorage.setItem("score", score);
        console.log("Success");
        console.log("Score: " + score);
        displayNextWord();
        clearInterval(interval);
        startInterval();
        playRandomAudio();
    } else {
        attempts++;
        console.log("Fail");
        playRandomAudio1();
    }
// MAXIMUM NO OF ATTEMPTS
if (attempts == 2) {
    window.location.href = "../pages/gameover.html";
}
}
localStorage.setItem("score", score);
guessbtn.addEventListener('click', checkGuess);
displayNextWord();
// THE INPUT SHOULD ALSO FUNCTION WHEN ENTER IS PRESSED
guessinput.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        checkGuess();
    }
})
// MAKING THE TIMER FUNCTIONAL 
let timerbox = document.getElementById("timeleft");
let interval;
function startInterval() {
    time = 30;
    interval = setInterval(() => {
        timerbox.textContent = time;
        time--;
        if (time == 0) {
            location.href = "../pages/gameover.html";
            clearInterval(interval);
        }
    }, 1000);
}

startInterval();
// ADDING BACKGROUND AUDIO 
document.addEventListener("DOMContentLoaded", function () {
    let bgAudio = new Audio("../Assets/GamePage2Assets/GamePage2BgAudio.mp3");
    bgAudio.play();
    bgAudio.loop = true;
    bgAudio.volume = 1;
});
// ARRAY OF AUDIOS WHEN THE USER SUCCEED IN GUESSING
const audios = [
    "../Assets/GamePage2Assets/SorryBlumeAudio.MP3",
    "../Assets/GamePage2Assets/LitAudio.MP3",
    "../Assets/GamePage2Assets/iknewit.MP3",
    "../Assets/GamePage2Assets/YouDidGoodAudio.MP3"
];

let lastRandomAudioIndex = -1;
// RANDOMLY PLAY AUDIOS WITHOUT REPETITION
function playRandomAudio() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * audios.length);
    } while (randomIndex === lastRandomAudioIndex);

    lastRandomAudioIndex = randomIndex;

    const randomAudio = new Audio(audios[randomIndex]);
    randomAudio.play();
}
// ARRAY OF AUDIOS WHEN THE USER FAILS TO ANSWER
const failaudios = [
    "../Assets/GamePage2Assets/BullshitAudio.MP3",
    "../Assets/GamePage2Assets/AwwAudio.MP3",
    "../Assets/GamePage2Assets/CJAudio.MP3"
];
// FUNCTION WHEN USER FAILS TO ANSWER
function playRandomAudio1() {
    const randomIndex1 = Math.floor(Math.random() * failaudios.length);
    const randomAudio1 = new Audio(failaudios[randomIndex1]);
    randomAudio1.play();
}

