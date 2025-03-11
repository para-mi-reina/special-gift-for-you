function openGift() {
    let giftBox = document.getElementById("gift-box");
    giftBox.src = "Gift Box Sticker by Crowd Multiplier.gif"; 

    for (let i = 0; i < 50; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.backgroundColor = getRandomColor();
        ball.style.left = Math.random() * window.innerWidth + "px";
        ball.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.getElementById("ball-container").appendChild(ball);
    }

    setTimeout(() => {
        window.location.href = "message.html";
    }, 3000);
}
function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖"; 
    heart.classList.add("falling-heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
