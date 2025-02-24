/*******************************************************/
// setup()
/*******************************************************/

const GAMEWIDTH = 500;
const GAMEHEIGHT = 500;

const PLAYERSIZE = 20
const MOVEMENTSPEED = 5;
var player;
var score = 0;

const COINSIZE = 10;
const COIN_TIMEOUT = 2000;
var coin;

function setup() {
	console.log("setup: ");

	cnv = new Canvas(GAMEWIDTH, GAMEHEIGHT);
	player = new Sprite(100, 100, PLAYERSIZE, PLAYERSIZE);
	player.color = 'green';

    createCoin();
	player.collides(coin, getPoint);
    function getPoint(collider1, collider2) {
		// Delete the coin which was hit
		collider2.remove();
        score++;
	}

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('cyan');

    movePlayer();
    checkCoinTime()
    displayScore();
}

function checkCoinTime(){
    // Check if the coin has been around too long (COIN_TIMEPUT millisecomnds)
    if (coin.spawntime + COIN_TIMEOUT < millis()){
        coin.remove()
    }
}

function createCoin(){
    //random (0, WIDNOWHEIGHT)
	coin = new Sprite(random(0, GAMEHEIGHT), random(0, GAMEWIDTH), COINSIZE);
	coin.color = 'yellow';
    coin.spawntime = millis();
}

function displayScore(){
    fill(0, 0, 0);
	textSize(20);
	text("Score: " + score, 10,20);
}
function movePlayer(){
    if (kb.pressing('a')) {
		player.vel.x = -MOVEMENTSPEED;
	} else if (kb.pressing('d')) {
		player.vel.x = MOVEMENTSPEED;
	} else {
		player.vel.x = 0;
	}
	
	
	if (kb.pressing('w')) {
		player.vel.y = -MOVEMENTSPEED;
	} else if (kb.pressing('s')) {
		player.vel.y = MOVEMENTSPEED;
	} else {
		player.vel.y = 0;
	}
}