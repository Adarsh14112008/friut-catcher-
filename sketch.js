var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;
var selectfruit;
var fruit;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (World.frameCount % 20 == 0) {
    fruit=createSprite(random(100,1000),0,10,10)
    fruit.valocityY=random(1,6);
    selectfruit=  Math.round(random(1,4));
    if (selectfruit == 1) {
      fruit.addImage ("fruit2_img",fruit2_img);
    } else if (selectfruit == 2) {
      fruit.addImage ("fruit1_img",fruit1_img);
        } else if (selectfruit == 3) {
          fruit.addImage ("fruit3_img",fruit3_img);
    } else if (selectfruit == 4){
      fruit.addImage ("fruit4_img",fruit4_img);
    } else{
      fruit.addImage ("fruit5_img",fruit5_img);
    }
    fruitGroup.add(fruit)
  }
  // Add conditions for gameStates and playerCount

}