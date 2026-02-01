document.addEventListener("DOMContentLoaded", () => {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const questionBox = document.getElementById("questionBox");
    const lovePage = document.getElementById("lovePage");

    const centerImg = document.getElementById("centerImg");
    const orbitContainer = document.getElementById("orbitContainer");
    const bgMusic = document.getElementById("bgMusic");
    const floatingText = document.getElementById("floatingText");
    const loveRain = document.getElementById("loveRain");

    const emojis = ["❤️","💋","💕","😍","💖"];

    // NO button moves
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - 120);
        const y = Math.random() * (window.innerHeight - 60);
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });

    // YES button click
    yesBtn.addEventListener("click", () => {
        questionBox.style.display = "none";
        lovePage.style.display = "flex";
        bgMusic.play();

        // Center image fade in
        centerImg.style.opacity = 0;
        setTimeout(() => { centerImg.style.transition = "opacity 1s"; centerImg.style.opacity = 1; }, 200);

        // Orbit images fade in
        const orbitImages = orbitContainer.querySelectorAll("img");
        orbitImages.forEach((img,index)=>{
            setTimeout(()=>{ img.style.transition="opacity 1s"; img.style.opacity=1; }, 400+index*200);
        });

        // Floating text
        setTimeout(()=>{ showFloatingText(); setInterval(showFloatingText,5000); }, 1200);

        // Center image rotation logic
        let rotationIndex = 0;
        const orbitSrcs = Array.from(orbitImages).map(img=>img.src);

        setInterval(()=>{
            const oldCenter = centerImg.src;
            centerImg.src = orbitSrcs[rotationIndex];
            orbitSrcs[rotationIndex] = oldCenter;
            rotationIndex = (rotationIndex + 1) % orbitSrcs.length;
        },5000);

        // Emoji rain
        setInterval(createEmoji,400);
    });

    // Floating text
    const loveMessages = [
        "I love you more than words can say ❤️",
        "You are my forever 💕",
        "My heart beats for you 💖",
        "You complete me 😘",
        "You are my world 🌍",
        "Forever yours ❤️"
    ];
    let msgIndex=0;
    function showFloatingText(){
        floatingText.textContent = loveMessages[msgIndex];
        floatingText.style.animation="none";
        floatingText.offsetHeight;
        floatingText.style.animation="floatUp 4s ease-in-out forwards";
        msgIndex = (msgIndex+1) % loveMessages.length;
    }

    // Emoji rain
    function createEmoji(){
        const emoji = document.createElement("div");
        emoji.classList.add("loveEmoji");
        emoji.textContent = emojis[Math.floor(Math.random()*emojis.length)];
        emoji.style.left = Math.random()*100+"%";
        const size = 15 + Math.random()*25;
        emoji.style.fontSize = size+"px";
        emoji.style.bottom="0px";
        loveRain.appendChild(emoji);
        setTimeout(()=>{ loveRain.removeChild(emoji); },5000);
    }
});
