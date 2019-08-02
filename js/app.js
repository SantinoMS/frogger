// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.limit = 500;
    this.randInt = function(min, max) {
        num1 = Math.floor(Math.random() * (max - min) + min);
        return num1;
    };
    this.speed = this.randInt(1, 8);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed;
        
    if (this.x >= this.limit) {
        this.x = -25;
    }
 };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let player = {
    
    sprite: "images/char-boy.png",
    x: 200,
    y: 400,
    keyPressed: null,
    
    update: function() {
        sprite = this.sprite;
        x = this.x;
        y = this.y;
    },
    
    render: function() {
        ctx.drawImage(Resources.get(sprite), x, y);
        console.log('X: ' + this.x + ', Y: ' + this.y);
    },
    
    handleInput: function(keyPressedPriv) {
        this.keyPressed = keyPressedPriv;
        switch (this.keyPressed) {
            case 'left':
            
                if (this.x != 10)
                    {this.x -= 95;};
                break;
                
            case 'up':
                
                if (this.y != -25)
                    {this.y -= 85;};
                break;
                
            case 'right':
                
                if (this.x != 390)
                    {this.x += 95;};
                break;
                
            case 'down':
                
                if (this.y != 400)
                    {this.y += 85;};
                break;
            
        };
    }
    
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [
    paul = new Enemy(-25, 50),
    joe = new Enemy(-25, 132),
    bob = new Enemy(-25, 214)
];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
// Changed to keydown
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
