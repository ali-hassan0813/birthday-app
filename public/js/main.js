// ---------- Cake Cut ----------
function cutCake() {
    const cake = document.getElementById('cake');
    const nextBtn = document.getElementById('nextBtn');

    if (cake) {
        cake.innerText = '🍰';
        cake.style.transform = 'scale(1.2)';
    }

    if (nextBtn) {
        nextBtn.classList.remove('hidden');
    }
}

// ---------- Confetti ----------
const canvas = document.getElementById('confetti');

if (canvas) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createDots(); // resize pe dots dobara banenge
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let dots = [];

    function createDots() {
        dots = Array.from(
            { length: window.innerWidth < 768 ? 50 : 120 },
            () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 4
            })
        );
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach(d => {
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = '#f472b6';
            ctx.fill();

            d.y += 2;
            if (d.y > canvas.height) d.y = 0;
        });
        requestAnimationFrame(animate);
    }

    animate();
}

// ===== REALISTIC FIREWORKS =====
const fwCanvas = document.getElementById("fireworks");

if (fwCanvas) {
    const ctx = fwCanvas.getContext("2d");

    function resizeFW() {
        fwCanvas.width = window.innerWidth;
        fwCanvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeFW);
    resizeFW();

    let particles = [];

    function createFirework(){
        const x = Math.random() * fwCanvas.width;
        const y = Math.random() * fwCanvas.height * 0.5;

        for(let i = 0; i < (window.innerWidth < 768 ? 40 : 80); i++){
            particles.push({
                x,
                y,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 6 + 2,
                radius: 2,
                alpha: 1
            });
        }
    }

    function animateFireworks(){
        ctx.clearRect(0,0,fwCanvas.width,fwCanvas.height);

        particles.forEach((p,i)=>{
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.alpha -= 0.015;

            ctx.fillStyle = `rgba(236,72,153,${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
            ctx.fill();

            if(p.alpha <= 0) particles.splice(i,1);
        });

        requestAnimationFrame(animateFireworks);
    }

    setInterval(createFirework, 1200);
    animateFireworks();
}
