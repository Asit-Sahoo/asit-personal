const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionBox = document.getElementById("questionBox");
const lovePage = document.getElementById("lovePage");

const centerImg = document.getElementById("centerImg");
const orbitContainer = document.getElementById("orbitContainer");
const bgMusic = document.getElementById("bgMusic");
const floatingText = document.getElementById("floatingText");
const loveRain = document.getElementById("loveRain");

/* NO BUTTON MOVE */
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* YES BUTTON CLICK */
yesBtn.addEventListener("click", () => {
    questionBox.style.display = "none"; // hide question page
    lovePage.style.display = "flex";    // show love page
    bgMusic.play();

    // Fade in center image
    centerImg.style.opacity = 0;
    setTimeout(() => {
        centerImg.style.transition = "opacity 1s";
        centerImg.style.opacity = 1;
    }, 200);

    // Fade in orbit images sequentially
    const orbitImages = orbitContainer.querySelectorAll("img");
    orbitImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.transition = "opacity 1s";
            img.style.opacity = 1;
        }, 400 + index * 200);
    });

    // Floating text
    setTimeout(() => {
        showFloatingText();
        setInterval(showFloatingText, 5000);
    }, 1200);

    // Start the center rotation loop
    setInterval(swapCenterImage, 5000);

    // Start the love emoji rain
    setInterval(createEmoji, 400);
});

/* -------------------- ROTATION LOGIC -------------------- */
function swapCenterImage() {
    const orbitImages = Array.from(orbitContainer.querySelectorAll("img"));
    
    // Save current center
    const oldCenterSrc = centerImg.src;
    
    // Take first orbit image to center
    const newCenterImg = orbitImages.shift();
    centerImg.src = newCenterImg.src;
    
    // Put old center at the end of orbit
    newCenterImg.src = oldCenterSrc;
    
    // Append newCenterImg to end of orbit container to keep rotation order
    orbitContainer.appendChild(newCenterImg);
}

/* -------------------- FLOATING LOVE MESSAGES -------------------- */
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

/* -------------------- LOVE EMOJI RAIN -------------------- */
const emojis = ["❤️","💋","💕","😍","💖"]; // hearts, kiss, love

function createEmoji(){
    const emoji = document.createElement("div");
    emoji.classList.add("loveEmoji");
    emoji.textContent = emojis[Math.floor(Math.random()*emojis.length)];

    // Random horizontal position
    emoji.style.left = Math.random() * 100 + "%";

    // Random font size
    const size = 15 + Math.random() * 25; // 15px to 40px
    emoji.style.fontSize = size + "px";

    // Start at bottom of LOVE page
    emoji.style.bottom = "0px";

    loveRain.appendChild(emoji);

    // Remove emoji after 5s (when it reaches top)
    setTimeout(()=>{ loveRain.removeChild(emoji) },5000);
}

