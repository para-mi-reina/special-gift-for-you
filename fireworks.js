const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, color, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.life = 100; 
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

let particles = [];

function createFirework(x, y) {
    const colors = ["red", "yellow", "blue", "green", "purple", "orange"];
    for (let i = 0; i < 50; i++) {
        let speedX = (Math.random() - 0.5) * 6;
        let speedY = (Math.random() - 0.5) * 6;
        let size = Math.random() * 3 + 1;
        let color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color, size, speedX, speedY));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.life <= 0) {
            particles.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

setTimeout(() => {
    setInterval(() => {
        let x = Math.random() * canvas.width;
        let y = Math.random() * (canvas.height / 2);
        createFirework(x, y);
    }, 1000);
}, 1000);

animate();
function openGift() {
    let giftBox = document.getElementById("gift-box");
    giftBox.src = "gift_open.png"; 

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
