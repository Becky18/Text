nose_x=0;
nose_y=0;
difference=0;
right_wrist_x=0;
left_wrist_x=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(650,650);
    canvas=createCanvas(550,550);
    canvas.position(1060,200);
    video.position(260,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes)
}

function modelLoaded(){
console.log("The model has started.");
}

function gotposes(results){
    if(results.length>0){
    console.log(results)
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("TEXT x="+nose_x+"  TEXT y="+nose_y);
    right_wrist_x=results[0].pose.rightWrist.x;
    left_wrist_x=results[0].pose.leftWrist.x;
    console.log("Left Wrist x="+left_wrist_x+"  Right Wrist x="+right_wrist_x);
    difference=floor(left_wrist_x-right_wrist_x);
    console.log("differnce="+difference);
    
        }
        
    }
    function draw()
    {
        document.getElementById("square_side").innerHTML="Width & Height of the TEXT will be ="+difference+"px";
        background("#0f0f0f");
        textSize(difference);
        text('TEXT', nose_x, nose_y);
        fill('#7fe1f0');
        stroke("#a5cfbe");
    
    
        
    }