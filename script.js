let leon, canvas, ctx;


const sw = window.innerWidth; // 화면의 너비
const sh = window.innerHeight; // 화면의 높이

const pixelRatio = 2;

window.addEventListener('resize', () => {
    resize();
});

// 캔버스 크기 조정 함수
function resize() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 622) {
        leon.size = 60;
        smallLeon.size = 30;
    }

    else if (windowWidth > 622 && windowWidth < 768) {
        leon.size = 80;
        smallLeon.size = 40;
    }
    else if (windowWidth > 768  && windowWidth < 1024) {
        leon.size = 100;
        smallLeon.size = 50;
    }
}


// Leon Sans Text Animation
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
        weight: 300, 
        align: 'left',
        isWave: true,
        amplitude: 0.1,
    });

    smallLeon = new LeonSans({
        text: 'Please Scroll Down.',
        color: ['#fff'],
        size: 60,
        align : 'left',
        weight : 200,
        isWave: true,
        amplitude: 0.1,
    
    });
    resize();

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
    const tl = gsap.timeline();

    if (scrollPos > window.innerHeight * 0.8) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }

    if (scrollPos > window.innerHeight * 2) {
        tl.to('.introduce-profile', {
            x: 50
        }, 1)
        .to('.introduce-p', {
            x: 50
        }, 1.1)
    }
});

document.getElementById('home').addEventListener('click', (event) => {
    event.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
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

const button = document.querySelector('#name');


