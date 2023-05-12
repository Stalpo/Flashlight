let x = 0;
let y = 0;
let dir = 0;

let startw = null;
let starta = null;
let starts = null;
let startd = null;
let interval = null;

// images

let tiles = new Image();
tiles.src = "tiles.png";
let player = new Image();
player.src = "bluePlayer.png";

// create world

let blocks = [];
blocks.push([[500, 500], [500, 600], [600, 600], [600, 500]]);

// inputs

window.addEventListener('mousemove', onMouseInput);
window.addEventListener('click', onMouseInput);
window.addEventListener('touchstart', onTouchInput);
window.addEventListener('touchmove', onTouchInput);
window.addEventListener('keydown', handlekeyDown);
window.addEventListener('keyup', handlekeyUp);

interval = setInterval(handleInput, 1000 / 60);

function onMouseInput(e) {
    handleDirection(e.clientX, e.clientY);
}

function onTouchInput(e) {
    const touch = e.touches[0];
    handleDirection(touch.clientX, touch.clientY);
}

function handleDirection(x, y) {
    dir = Math.atan2(x - window.innerWidth / 2, window.innerHeight / 2 - y);
}

function handlekeyDown(e) {
    switch (e.key) {
        case 'w':
            if (startw == null) {
                startw = Date.now();
            }
            break;
        case 's':
            if (starts == null) {
                starts = Date.now();
            }
            break;
        case 'a':
            if (starta == null) {
                starta = Date.now();
            }
            break;
        case 'd':
            if (startd == null) {
                startd = Date.now();
            }
            break;
    }
}

function handlekeyUp(e) {
    switch (e.key) {
        case 'w':
            if (startw != null) {
                y -= (Date.now() - startw) * 400 / 1000;
                startw = null;
            }
            break;
        case 's':
            if (starts != null) {
                y += (Date.now() - starts) * 400 / 1000;
                starts = null;
            }
            break;
        case 'a':
            if (starta != null) {
                x -= (Date.now() - starta) * 400 / 1000;
                starta = null;
            }
            break;
        case 'd':
            if (startd != null) {
                x += (Date.now() - startd) * 400 / 1000;
                startd = null;
            }
            break;
    }
}

function handleInput() {
    if (startw != null) {
        y -= (Date.now() - startw) * 400 / 1000;
        startw = Date.now();
    }
    if (starts != null) {
        y += (Date.now() - starts) * 400 / 1000;
        starts = Date.now();
    }
    if (starta != null) {
        x -= (Date.now() - starta) * 400 / 1000;
        starta = Date.now();
    }
    if (startd != null) {
        x += (Date.now() - startd) * 400 / 1000;
        startd = Date.now();
    }

    // stop at wall
    blocks.forEach(b => { WalkIntoBlock(b); });
}

function WalkIntoBlock(block) {
    let first;
    let last;
    block.forEach(p => {
        if (first == null) {
            first = p;
        } else {
            WalkIntoLine(p, last);
        }
        last = p;
    });
    WalkIntoLine(first, last);
}

function WalkIntoLine(p1, p2) {

}

//render

const canvas = document.getElementById('gamecanvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function render() {
    renderBG();
    renderMe();
    blocks.forEach(b => { renderBlock(b); });

    animationFrameRequestId = requestAnimationFrame(render);
}

function renderBG() {
    const canvasX = canvas.width / 2;
    const canvasY = canvas.height / 2;
    context.save();
    context.translate(canvasX, canvasY);
    context.drawImage(
        tiles,
        -canvas.width / 2 - fixCoord(x) % (canvas.height / 9) - (canvas.height / 9) * 2 + (canvas.width / 2) % (canvas.height / 9),
        -canvas.height / 2 - fixCoord(y) % (canvas.height / 9) - (canvas.height / 9),
        canvas.height / 9 * 24,
        canvas.height / 9 * 13,
    );
    context.restore();
}

function renderMe() {
    const canvasX = canvas.width / 2 + fixCoord(x) - fixCoord(x);
    const canvasY = canvas.height / 2 + fixCoord(y) - fixCoord(y);
    context.save();
    context.translate(canvasX, canvasY);
    context.rotate(dir);
    context.drawImage(
        player,
        -canvas.height / 17 / 2,
        -canvas.height / 17 * player.height / player.width + canvas.height / 17 / 2,
        canvas.height / 17,
        canvas.height / 17 * player.height / player.width,
    );
    context.restore();
}

function renderBlock(block) {
    let first;
    let last;
    block.forEach(p => {
        if (first == null) {
            first = p;
        } else {
            const canvasX = canvas.width / 2 + fixCoord(p[0]) - fixCoord(x);
            const canvasY = canvas.height / 2 + fixCoord(p[1]) - fixCoord(y);
            const canvasX2 = canvas.width / 2 + fixCoord(last[0]) - fixCoord(x);
            const canvasY2 = canvas.height / 2 + fixCoord(last[1]) - fixCoord(y);
            context.save();
            context.lineWidth = 10;
            context.strokeStyle = '#8F8F8F';
            context.beginPath();
            context.moveTo(canvasX, canvasY);
            context.lineTo(canvasX2, canvasY2);
            context.stroke();
            context.restore();
        }
        last = p;
    });
    const canvasX = canvas.width / 2 + fixCoord(first[0]) - fixCoord(x);
    const canvasY = canvas.height / 2 + fixCoord(first[1]) - fixCoord(y);
    const canvasX2 = canvas.width / 2 + fixCoord(last[0]) - fixCoord(x);
    const canvasY2 = canvas.height / 2 + fixCoord(last[1]) - fixCoord(y);
    context.save();
    context.lineWidth = 10;
    context.strokeStyle = '#8F8F8F';
    context.beginPath();
    context.moveTo(canvasX, canvasY);
    context.lineTo(canvasX2, canvasY2);
    context.stroke();
    context.restore();
}

function fixCoord(x) {
    return x * canvas.height / 1080;
}

let animationFrameRequestId;

setTimeout(() => { animationFrameRequestId = requestAnimationFrame(render); }, 1000);