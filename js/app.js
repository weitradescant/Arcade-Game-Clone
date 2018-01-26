// 这是我们的玩家要躲避的敌人 
const Enemy = function(x,y,s) {
	const obj = Object.create(Enemy.prototype);  
	this.x = x;
	this.y = y;
	this.s = s;
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
	this.x += this.s * dt;
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
};


Enemy.prototype.render = function() {     //渲染虫子
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function(x,y) {
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

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数

const allEnemies = [new Enemy(0,64,100)];
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


// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Player.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keydown', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
