//https://teachablemachine.withgoogle.com/models/tkIAZI0k7/
prediction1 = "";
prediction2 = "";
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 camera = document.getElementById("camera");
 Webcam.attach(camera);
function takeSnapshot(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="captured_img" src="'+data_uri+'"/>';
    } );
}
console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tkIAZI0k7/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelloaded");
}
function speak(){
    synth=window.speechSynthesis;
    speak_1="The First Prediction is"+prediction1;
    speak_2="And the Second one is"+prediction2;
    utterthis=new speechSynthesisUtterence(speak_1+speak_2);
    synth.speak(utterthis);
    console.log(utterthis);
}
function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img,gotResults);
    console.log("checking");
}
function gotResults(error,results){
if(error){
console.log(error);
}else{
    console.log(results);
    document.getElementById("result_name").innerHTML=results[0].label;
    document.getElementById("result_name2").innerHTML=results[1].label;
    prediction1=results[0].label;
    prediction2=results[1].label;
    speak();
    if(results[0].label == 'amazing') 
    { 
        document.getElementById("update_emoji").innerHTML = "&#128076;"; 
    }
    
    if(results[0].label == 'best') 
    { 
        document.getElementById("update_emoji").innerHTML = "&#128077;"; 
    }
    if(results[0].label == 'victory') 
    { 
        document.getElementById("update_emoji").innerHTML = "&#9996;"; 
        console.log("hello");
    }
    if(results[1].label == "amazing") 
    { 
        document.getElementById("update_emoji2").innerHTML = "&#128076;"; 
    }
    
    if(results[1].label == "best") 
    { 
        document.getElementById("update_emoji2").innerHTML = "&#128077;"; 
    }
    if(results[1].label == "victory") 
    { 
        document.getElementById("update_emoji2").innerHTML = "&#9996;"; 
    }
}

}


