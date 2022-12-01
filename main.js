x = 0;
y = 0;
screen_height = "";
draw_strawberry = "";
screen_height = "";
speak_data = "";
to_number = "";
strawberry = "";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  img = loadImage("strawberry2.png");
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 console.log(event); 
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    console.log(to_number);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing Strawberry.";
    draw_strawberry = "set";
    }else {
      document.getElementById("status").innerHTML = "The speech has not recognised a number.";
    }
      }

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width,screeen_height - 150);
 canvas.position(0, 150);
}

function draw() {
  if(draw_strawberry == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Strawberries drawn";
    draw_strawberry = "";
    speak_data = to_number + "Strawberries drawn";
    speak();
    for(var i = 1; i<= to_number; 1++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(strawberry, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
