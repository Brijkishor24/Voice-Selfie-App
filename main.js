var SpeechReconization=window.webkitSpeechRecognition;
var recognition=new SpeechReconization();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        console.log("Taking the selfie");
        speak();
    }
    else{
    console.log("It will take selfie if you will say take my selfie");
    }
}

function speak() {
    var synth=window.speechSynthesis;
    speech_data="Taking your selfie in five seconds";
    var utterance=new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterance);
    Webcam.attach(camera);
    setTimeout(function(){
        takeselfie();  
        save();
    },5000);

}

camera=document.getElementById("camera");
Webcam.set(
    {
      width:350,
      height:250,
      image_format:"png",
      png_quality:100
    }
);

function takeselfie() {
Webcam.snap(function(data_url){
    document.getElementById("selfie-output").innerHTML='<img id="selfie" src="'+data_url+'">';
});
}

function save(){
link=document.getElementById("link");
image=document.getElementById("selfie").src ;
link.href=image;
link.click();
}