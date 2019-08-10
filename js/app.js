// Enemies our player must avoid
var Enemy = function(x, y, lane, row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.limit = 500;
    this.lane = lane;
    this.randInt = function(min, max) {
        num1 = Math.floor(Math.random() * (max - min) + min);
        return num1;
    };
    this.speed = this.randInt(100, 500);
    this.row = row;
    this.alert = function() {alert("I'm a ladybug!");};
    
};

    // For checking a ladybug's position on the screen
    // The ladybug's position will appear in the console
    // It's put in a function here, to get each ladybug's
    // data individually

    this.log = function() {
        console.log("Lane#: " + this.lane + ' Row#: ' + this.row + " X: " + this.x);
    };
    
    
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    // Makes ladybugs move
    this.x += this.speed * dt;
    
    // For the ladybugs to go back to starting position
    if (this.x >= this.limit) {
        this.x = -25;
    };
    
    // For setting what row the lady bug is at
    if (this.x >= -27 && this.x <= 76) {
        this.row = 1;
    }
    else if (this.x >= 76 && this.x <= 177) {
        this.row = 2;
    }
    else if (this.x >= 177 && this.x <= 278) {
        this.row = 3;
    }
    else if (this.x >= 278 && this.x <= 379) {
        this.row = 4;
    }
    else if (this.x >= 379 && this.x <= 550) {
        this.row = 5;
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
    lane: 1,
    row: 3,
    safe: true,
    
    reset: function() {
        this.sprite = "images/char-boy.png";
        this.x = 200;
        this.y = 400;
        this.lane = 1;
        this.row = 3;
        this.keyPressed = null;
    },
    
    update: function() {
        sprite = this.sprite;
        // Lane detector
        switch (this.y) {
            case 400:
                this.lane = 1;
                break;
            case 315:
                this.lane = 2;
                break;
            case 230:
                this.lane = 3;
                break;
            case 145:
                this.lane = 4;
                break;
            case 60:
                this.lane = 5;
                break;
            case -25:
                this.lane = 6;
                break;
        };
        // Row detector
        switch (this.x) {
            case 10:
                this.row = 1;
                break;
            case 105:
                this.row = 2;
                break;
            case 200:
                this.row = 3;
                break;
            case 295:
                this.row = 4;
                break;
            case 390:
                this.row = 5;
                break;
        };
        // Death detector
        if (this.safe == false) {
            this.reset();
            this.safe = true;
        };
        
        // These functions are for checking collisions
        // They check if a bug and player are in the same lane and row
        // if they are the player loses and the reset() function is called

        if (bob.row == this.row && bob.lane == this.lane) {
            this.safe = false;
        }
        if (joe.row == this.row && joe.lane == this.lane) {
            this.safe = false;
        }
        if (paul.row == this.row && paul.lane == this.lane) {
            this.safe = false;
        }
        
        if (this.lane == 6) {
            setTimeout(
            function() {
                alert('You won already, now STOP!');}, 10);
                this.reset();
        };
        
    },
    
    render: function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        // For checking the player current information on console
        // console.log('(X: ' + this.x + ', Y: ' + this.y + ') Lane#: ' + this.lane + ' Row#: ' + this.row);
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
    paul = new Enemy(-25, 60, 5, 1),
    joe = new Enemy(-25, 145, 4, 1),
    bob = new Enemy(-25, 230, 3, 1)
];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
// Added spacebar event listener for the ladybugs
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    
    var pauseAllowedKeys = {
        32: 'spaceBar'
    }

    player.handleInput(allowedKeys[e.keyCode]);
    
});
