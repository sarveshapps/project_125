function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("red");
    textSize(difference);
    fill("black");
    text("sarvesh",50,400);
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=leftWristX-rightWristX;
    }
}
 