desenho = '';
Y = 0;
X = 0;
circulo = '';
retangulo = '';
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();



function setup(){
    canvas = createCanvas(1200, 700);
}

function falar(){
    recognition.start();
    document.getElementById('status').innerHTML  = 'Estamos ouvindo';
}


recognition.onresult = function(event){
    console.log(event);
    console.log('oi');
    content = event.results[0][0].transcript;

    document.getElementById('status').innerHTML = ('Nós entendemos ' + content);

    if(content == 'círculo'){
        X = Math.floor(Math.random() * 1200);
        Y = Math.floor(Math.random() * 700);
        document.getElementById('status').innerHTML  = 'Desenhando um circulo';
        circulo = 'set';
    }
    else if('retângulo' == content){
        X = Math.floor(Math.random() * 1200);
        Y = Math.floor(Math.random() * 700);
        document.getElementById('status').innerHTML  = 'Desenhando um retângulo';
        retangulo = 'set';
        }
}


function draw(){
    if(circulo == 'set'){
        radius = Math.floor(Math.random() * 100); 
        circle(X, Y, radius);
        circulo = '';
    }
    if(retangulo == 'set'){
       
        rect(X, Y, 70, 30);
        retangulo = '';
    }
}
