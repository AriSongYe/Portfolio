let leon, canvas, ctx;

const sw = window.innerWidth;
const sh = window.innerHeight;

const pixelRatio = 2;

function init() {

    canvas = document.getElementById('MainText');
    ctx = canvas.getContext("2d");

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);

    leon = new LeonSans({
        text: 'Welcome!\nSonye\'s Portfolio.',
        color: ['#fff'],
        size: 120,
        weight: 200
    });

    smallLeon = new LeonSans({
        text: 'Please Scroll Down.',
        color: ['#fff'],
        size: 60,
        weight: 150
    });

    leon.align = 'left';
    leon.weight = 200;
    leon.isWave = true;
    leon.amplitude = 0.1;

    smallLeon.align = 'left';
    smallLeon.weight = 200;
    smallLeon.isWave = true;
    smallLeon.amplitude = 0.1;

    requestAnimationFrame(animate);
}

function animate(t) {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;
    leon.position(x, y);
    leon.wave(ctx, t);

    smallLeon.position(x, y + 300);
    smallLeon.wave(ctx, t);
}

window.onload = () => {
    init();
};

// 스크롤이 100vh 이상인 경우 Navbar를 나타냄
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('nav_bar');
    const scrollPos = window.scrollY;

    if (scrollPos > window.innerHeight * 0.8) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});

document.getElementById('home').addEventListener('click', (event) => {
    event.preventDefault(); // 기본 동작 방지
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드럽게 맨 위로 스크롤
});

let observer = new IntersectionObserver((e)=> {
    e.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
        }else {
            entry.target.style.opacity = 0;
        }
    })
})

const index = document.querySelectorAll('h1');
index.forEach((element) => {
    observer.observe(element);
});
