const Enemy = function(x,y,s) {   //虫子 参数为横坐标，纵坐标，基数速度
	const obj = Object.create(Enemy.prototype);  
	this.x = x;
	this.y = y;
	this.s = s;
	this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {   //虫子移动
	this.x += this.s * dt;
	if (this.x > 504) {    //到底以后循环出现在左侧
		this.x = -101;
		this.y = 64 + 85 * Math.floor(2.9 * Math.random())   //*(0-2的数字)
	}
};


Enemy.prototype.render = function() {     //渲染虫子
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollisions = function () {   //检测碰撞
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


Player.prototype.update = function() {  //判断胜利
	if (this.y === -21) {
		setTimeout(win,1);
	}
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
const bug1 = new Enemy(-101,149,50);
const bug2 = new Enemy(-101,64,80);
const bug3 = new Enemy(-101,234,110);
const allEnemies = [bug1,bug2,bug3];
const player = new Player(202,404);
//    canvas.width = 505;  -101~505          
//    canvas.height = 606;
//   y\x  0 101 202 303 404
//   -21
//    64  e
//   149  e
//   234  e
//   319
//   404
//
function win(){	
	player.y = 404;
	if (allEnemies.length <= 6) {
		alert("恭喜你到达对岸，增加难度再来一次吧！");
		addbug();
	} else {
		alert("你已经通过了最高难度7只虫子，不可思议！再来一次吧！");
	}
}

function addbug() {
	const obj = new Enemy(-101,149,110 + 25 * (allEnemies.length - 2));
	allEnemies.push(obj);
}

document.addEventListener('keydown', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
