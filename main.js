nosex=""
nosey=""
function preload() {
img = loadImage("https://i.postimg.cc/C5NRM8ww/handlebar-moustache-clip-art-mustache-removebg-preview.png")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video =createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    poseNet= ml5.poseNet(video,modeloaded)
    poseNet.on('pose',getposes)
}
function modeloaded() {
    console.log("poseNet model is loaded")
}
function getposes(results) {
    if(results.length>0) {
  console.log(results);
  nosex= results[0].pose.nose.x;
  nosey= results[0].pose.nose.y;
  console.log(nosex);
  console.log(nosey)
    }
}
function draw() {
image(video,0,0,600,500)
image(img,nosex-40,nosey-17,90,70)
}

function takesnapshot() {
 save("my filter.png")
}