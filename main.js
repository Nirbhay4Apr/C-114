noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/GtGwB1Gy/istockphoto-485318064-612x612-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        noseX = results[0].pose.nose.x;
        console.log("Nose y = " + results[0].pose.nose.y);
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache,noseX-25,noseY,60,40);
    fill("black");
}

function take_snapshot(){
    save('myFilterImage.png');
}
