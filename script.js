const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionBox = document.getElementById("questionBox");
const lovePage = document.getElementById("lovePage");

const centerImg = document.getElementById("centerImg");
const orbitContainer = document.getElementById("orbitContainer");
const bgMusic = document.getElementById("bgMusic");
const floatingText = document.getElementById("floatingText");

/* NO BUTTON RUNS */

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* YES BUTTON */

yesBtn.addEventListener("click", () => {
    questionBox.style.display = "none";
    lovePage.style.display = "block";
    bgMusic.play();
});

/* IMAGE SWAP */

setInterval(() => {

    const orbitImages = orbitContainer.querySelectorAll("img");
    const firstOrbit = orbitImages[0];
    const oldCenter = centerImg.src;

    centerImg.src = firstOrbit.src;
    firstOrbit.src = oldCenter;

}, 5000);

/* FLOATING LOVE MESSAGES */

const loveMessages = [
"I love you more than words can say ❤️",
"You are my forever 💕",
"My heart beats for you 💖",
"You complete me 😘",
"You are my world 🌍",
"Forever yours ❤️"
];

let msgIndex = 0;

function showFloatingText(){
    floatingText.textContent = loveMessages[msgIndex];
    floatingText.style.animation = "none";
    floatingText.offsetHeight; 
    floatingText.style.animation = "floatUp 4s ease-in-out forwards";
    msgIndex = (msgIndex + 1) % loveMessages.length;
}

setInterval(showFloatingText, 5000);
