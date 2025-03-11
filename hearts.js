const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function createHeart() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 10 + 5;
    const speed = Math.random() * 2 + 1;
    hearts.push({ x, y, size, speed });
}

function drawHeartShape(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.bezierCurveTo(x - size, y - size / 2, x - size, y - size, x, y - size);
    ctx.bezierCurveTo(x + size, y - size, x + size, y - size / 2, x, y + size / 4);
    ctx.fillStyle = "rgba(255, 0, 127, 0.8)";
    ctx.fill();
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < hearts.length; i++) {
        const h = hearts[i];
        drawHeartShape(h.x, h.y, h.size);
        h.y += h.speed;
        if (h.y > canvas.height) {
            hearts.splice(i, 1);
            createHeart();
        }
    }

    requestAnimationFrame(drawHearts);
}

for (let i = 0; i < 30; i++) createHeart();
drawHearts();
