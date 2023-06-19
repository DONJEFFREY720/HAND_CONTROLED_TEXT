function setup(){
     canvas = createCanvas(400,400)
     canvas.position(560,150)
     video = createCapture(VIDEO)
     video.size(550,500)
     poseNet = ml5.poseNet(video,modelLoaded)
     poseNet.on("pose",gotResults)
}

noseX = 0 
noseY = 0
leftWrist = 0
rightWrist = 0
difference = 0

function modelLoaded(){
     console.log("MODEL LOADED!")
}

function draw(){
     background("grey")
     textSize(difference)
     fill("pink")
     stroke("black")
    text("DON JEFFREY",noseX,noseY)
}

function gotResults(results){
     if(results.length>0){
          console.log(results)
          noseX = results[0].pose.nose.x
          noseY = results[0].pose.nose.y
          leftWrist = results[0].pose.leftWrist.x
          leftWrist = results[0].pose.rightWrist.y
          console.log("nose x :  "+noseX+"nose y :  "+noseY)
     }
}

