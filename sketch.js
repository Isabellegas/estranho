let imgjogador, imgobstaculo, imgfundo;
let obstaculo = [];
let fundo = [];
let jogador;

function preload() {
  imgjogador = loadImage("imagens/2.png");
  imgobstaculo = loadImage("imagens/1.png");
  imgfundo = loadImage("imagens/fundo.png");

}

function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2);
  jogador = new Jogador();

}

function draw() {
  nascerFundo();
  for (let f of fundo) {
    f.show();
    f.move();
  }
  background(220);
  jogador.show();
  jogador.move();
  nascerObstaculo();
  for (let o of obstaculo) {
    o.show();
    o.move();
  }



}

function keyPressed() {
  if (key == " ") {
    jogador.jump();
  }

}
function nascerObstaculo() {
  if (frameCount % 80 === 0) {
    obstaculo.push(new Obstaculo());
  }
}
function nascerFundo() {
  if (frameCount % 80 === 0) {
    fundo.push(new Fundo());
  }

}