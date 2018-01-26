const Enemy = function(x,y,s) {   //虫子 参数为横坐标，纵坐标，基数速度
	const obj = Object.create(Enemy.prototype);  
	this.x = x;
	this.y = y;
	this.s = s;
	this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {   //虫子移动
	this.x += this.s * dt;
};


Enemy.prototype.render = function() {     //渲染虫子
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollision = function () {   //检测碰撞
	if (this.y === player.y && this.x - player.x <= 80 && player.x - this.x <= 80) {
		player.y = 404;
	}
}

const Player = function(x,y) {   //玩家
	const obj = Object.create(Player.prototype);
	this.x = x;
	this.y = y;
    this.sprite = 'images/char-princess-girl.png';
};



Player.prototype.update = function(dt) {

};

Player.prototype.handleInput = function(keyCode) {  //玩家的上下左右控制
    if (keyCode === 'left' && this.x > 0) {
    	this.x -= 101;
    };
    if (keyCode === 'right' && this.x < 404) {
    	this.x += 101;
    };
    if (keyCode === 'up' && this.y > -20) {
    	this.y -= 85;
    };
    if (keyCode === 'down' && this.y < 404) {
    	this.y += 85;;
    };
};

Player.prototype.render = function() {    //渲染玩家
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const allEnemies = [new Enemy(270,149,1)];
const player = new Player(202,404);
//    canvas.width = 505;  -101~505          
//    canvas.height = 606;
//       0 101 202 303 404
//    0
//   64   e
//   149  e
//   234  e
//   319
//   404
//
// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面

document.addEventListener('keydown', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
