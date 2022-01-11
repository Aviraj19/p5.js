nosex=""
nosey=""
function preload() {

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
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
}

function takesnapshot() {
 save("my filter.png")
}