let imgjogador, imgobstaculo, imgfundo;
let obstaculo = [];
let fundo = [];
let jogador;

function preload(){
  imgjogador = loadImage("imagens/2.png");
  imgobstaculo = loadImage("imagens/1.png");
  imgfundo = loadImage("imagens/fundo.png");
  
}

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  jogador = new Jogador();
}

function draw() {
  background(220);
  jogador.show();
  jogador.move();
}

function keyPressed() {
  if (key == " ") {
    jogador.jump();
  }
}