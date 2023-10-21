var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=='take my selfie'){
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking Your Selfie In 5 Seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
 Webcam.attach(camera);
 setTimeout(function(){
take_snapshot();
save();
 },5000);
}
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">"';
    });
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format:'png0',
    png_quality:90
});
function save(){
 link=document.getElementById("link");
 img=document.getElementById("selfie_image").src ;
 link.href=img;
 link.click()
}
