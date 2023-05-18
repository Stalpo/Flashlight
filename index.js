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
// , [00, 00]
// blocks.push([[00, 00]]);

let blocks = [];
blocks.push([[200, 2000], [3300, 2000], [3300, 2100], [200, 2100]]);
blocks.push([[-200, 2000], [-3300, 2000], [-3300, 2100], [-200, 2100]]);
blocks.push([[3200, 2000], [3300, 2000], [3300, -2000], [3200, -2000]]);
blocks.push([[-3200, 2000], [-3300, 2000], [-3300, -2000], [-3200, -2000]]);
blocks.push([[-3300, -2100], [3300, -2100], [3300, -2000], [-3300, -2000]]);
blocks.push([[100, 100], [200, 100], [200, 2100], [-200, 2100], [-200, 200], [-300, 200], [-300, 100], [-100, 100], [-100, 2000], [100, 2000]]);
blocks.push([[200, 100], [500, 100], [500, 400], [300, 400], [300, 300], [400, 300], [400, 200], [200, 200]]);
blocks.push([[100, -300], [200, -300], [200, -200], [300, -200], [300, -300], [400, -300], [400, -200], [500, -200], [500, -300], [600, -300], [600, -200], [700, -200], [700, -300], [800, -300], [800, -100], [100, -100]]);
blocks.push([[900, -300], [1000, -300], [1000, -200], [1100, -200], [1100, -300], [1200, -300], [1200, -200], [1300, -200], [1300, -300], [1400, -300], [1400, -200], [1500, -200], [1500, -300], [1600, -300], [1600, -100], [900, -100]]);
blocks.push([[100, -600], [100, -400], [200, -400], [200, -500], [300, -500], [300, -400], [400, -400], [400, -500], [500, -500], [500, -400], [600, -400], [600, -500], [700, -500], [700, -400], [800, -400], [800, -500], [900, -500], [900, -400], [1000, -400], [1000, -500], [1100, -500], [1100, -400], [1200, -400], [1200, -500], [1300, -500], [1300, -400], [1400, -400], [1400, -500], [1500, -500], [1500, -400], [1600, -400], [1600, -600]]);
blocks.push([[700, 100], [800, 100], [800, 600], [700, 600]]);
blocks.push([[200, 500], [500, 500], [500, 600], [200, 600]]);
blocks.push([[900, 100], [1600, 100], [1600, 200], [1000, 200], [1000, 500], [1600, 500], [1600, 600], [900, 600]]);
blocks.push([[1800, 100], [1900, 100], [1900, 900], [300, 900], [300, 800], [1800, 800]]);
blocks.push([[200, 1100], [1900, 1100], [1900, 1200], [200, 1200]]);
blocks.push([[2100, -100], [2200, -100], [2200, 1100], [2100, 1100]]);
blocks.push([[1600, -200], [1900, -200], [1900, -900], [500, -900], [500, -1000], [2000, -1000], [2000, -100], [1600, -100]]);
blocks.push([[2000, -200], [3200, -200], [3200, -100], [2000, -100]]);
blocks.push([[100, -1400], [2400, -1400], [2400, -500], [2300, -500], [2300, -1300], [200, -1300], [200, -600], [100, -600]]);
blocks.push([[100, -2000], [200, -2000], [200, -1400], [100, -1400]]);
blocks.push([[400, -1700], [2700, -1700], [2700, -200], [2600, -200], [2600, -1600], [400, -1600]]);
blocks.push([[2900, -2000], [3000, -2000], [3000, -400], [2900, -400]]);
blocks.push([[400, 1400], [600, 1400], [600, 1600], [400, 1600]]);
blocks.push([[900, 1700], [1000, 1700], [1000, 1600], [1100, 1600], [1100, 1700], [1200, 1700], [1200, 1800], [1100, 1800], [1100, 1900], [1000, 1900], [1000, 1800], [900, 1800]]);
blocks.push([[1400, 1300], [1700, 1300], [1700, 1600], [1400, 1600]]);
blocks.push([[1600, 1800], [2200, 1800], [2200, 1900], [1600, 1900]]);
blocks.push([[2100, 1400], [2200, 1400], [2200, 1300], [2300, 1300], [2300, 1200], [2400, 1200], [2400, 1300], [2500, 1300], [2500, 1400], [2600, 1400], [2600, 1500], [2500, 1500], [2500, 1600], [2400, 1600], [2400, 1700], [2300, 1700], [2300, 1600], [2200, 1600], [2200, 1500], [2100, 1500]]);
blocks.push([[2600, 1700], [2900, 1700], [2900, 1400], [3000, 1400], [3000, 1800], [2600, 1800]]);
blocks.push([[2700, 1000], [2800, 1000], [2800, 1100], [2900, 1100], [2900, 1000], [3000, 1000], [3000, 1200], [2700, 1200]]);
blocks.push([[2200, 800], [3000, 800], [3000, 900], [2200, 900]]);
blocks.push([[2300, 200], [2400, 200], [2400, 300], [2300, 300]]);
blocks.push([[2600, 100], [2800, 100], [2800, 300], [2600, 300]]);
blocks.push([[3000, 100], [3100, 100], [3100, 500], [3000, 500]]);
blocks.push([[2400, 500], [3200, 500], [3200, 600], [2400, 600]]);


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
    let pdist = Math.sqrt((x - p1[0]) * (x - p1[0]) + (y - p1[1]) * (y - p1[1]));
    if (pdist <= canvas.height / 17 / 2) {
        let xr = Math.abs(x - p1[0]) / pdist;
        let yr = Math.abs(y - p1[1]) / pdist;
        if (x > p1[0]) {
            x += xr * (canvas.height / 17 / 2 - pdist);
        } else {
            x -= xr * (canvas.height / 17 / 2 - pdist);
        }
        if (y > p1[1]) {
            y += yr * (canvas.height / 17 / 2 - pdist);
        } else {
            y -= yr * (canvas.height / 17 / 2 - pdist);
        }
    }
    if (p1[0] - p2[0] == 0) {
        if (y > p1[1] && y < p2[1] || y < p1[1] && y > p2[1]) {
            if (Math.abs(x - p1[0]) <= canvas.height / 17 / 2) {
                if (x - p1[0] > 0) {
                    x += (canvas.height / 17 / 2 - Math.abs(x - p1[0]))
                } else {
                    x -= (canvas.height / 17 / 2 - Math.abs(x - p1[0]))
                }
            }
        }
    } else if (p1[1] - p2[1] == 0) {
        if (x > p1[0] && x < p2[0] || x < p1[0] && x > p2[0]) {
            if (Math.abs(y - p1[1]) <= canvas.height / 17 / 2) {
                if (y - p1[1] > 0) {
                    y += (canvas.height / 17 / 2 - Math.abs(y - p1[1]))
                } else {
                    y -= (canvas.height / 17 / 2 - Math.abs(y - p1[1]))
                }
            }
        }
    } else {
        let slope = p1[x] - p2[x];
    }
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
    blockVision();
    renderMe();

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

// render out stuff you cant see

function blockVision() {
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(60 * Math.PI / 180 + dir);
    context.fillRect(-2000, 0, 4000, 2000);
    context.restore();

    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(-60 * Math.PI / 180 + dir);
    context.fillRect(-2000, 0, 4000, 2000);
    context.restore();

    blocks.forEach(b => { blockBlock(b); });
}

function blockBlock(block) {
    let first;
    let last;
    block.forEach(p => {
        if (first == null) {
            first = p;
        } else {
            blockLine(p, last);
        }
        last = p;
    });
    blockLine(first, last);
}

function blockLine(p1, p2) {
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.beginPath();
    context.moveTo(fixCoord(p1[0]) - fixCoord(x), fixCoord(p1[1]) - fixCoord(y));
    context.lineTo(fixCoord(p2[0]) - fixCoord(x), fixCoord(p2[1]) - fixCoord(y));
    context.lineTo((fixCoord(p2[0]) - fixCoord(x)) * 20, (fixCoord(p2[1]) - fixCoord(y)) * 20);
    context.lineTo((fixCoord(p1[0]) - fixCoord(x)) * 20, (fixCoord(p1[1]) - fixCoord(y)) * 20);
    context.fill();
    context.restore();
}

// helper functions

function getSlope(p1, p2) {
    if (p1[1] - p2[1] == 0) {
        return null;
    } else {
        return (p1[1] - p2[1]) / (p1[0] - p2[0]);
    }
}

function fixCoord(x) {
    return x * canvas.height / 1080;
}

let animationFrameRequestId;

setTimeout(() => { animationFrameRequestId = requestAnimationFrame(render); }, 1000);