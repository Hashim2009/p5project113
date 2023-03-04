function preload() {}

function setup() {
    canvas = createCanvas(600, 900);
    canvas.position(150, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 450);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(100, 525, 40);
    circle(500, 525, 40);
    circle(100, 825, 40);
    circle(500, 825, 40);
    fill(200, 0, 0);
    stroke(200, 0, 0);
    rect(120, 525, 360, 20);
    rect(100, 545, 20, 260);
    rect(120, 805, 360, 20);
    rect(480, 545, 20, 260);
}

function take_snapshot() {
    save('user.png');
    img = loadImage('user.png'), 125, 550, 350, 250
}