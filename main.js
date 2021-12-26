prediction="";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/></img>';
    
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/L-8Uj7yRW/model.json');

function modelLoaded(){
    cosnole.log('Model Loaded');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "The prediction is "+ prediction;
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}