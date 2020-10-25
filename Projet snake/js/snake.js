function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1 * scale;
    this.ySpeed = 0 * scale;
    this.total = 0;
    this.tail = []

    this.draw = function() {
        ctx.fillStyle = "#FFF";

        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale)
    }

    this.update = function() {

        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1]
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            this.x = 0
        }

        if (this.x < 0) {
            this.x = canvas.width
        }

        if (this.y > canvas.height) {
            this.y = 0
        }

        if (this.y < 0) {
            this.y = canvas.height
        }
    }

    this.changeDirection = function(direction) {
        switch (direction) {
            case 'Left':
                this.ySpeed = 0;
                this.xSpeed = -scale * 1
                break;
            case 'Right':
                this.ySpeed = 0;
                this.xSpeed = +scale * 1
                break;
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = +scale * 1
                break;
        }
    }

    this.eat = function(apple) {
        if (this.x === apple.x && this.y === apple.y) {
            this.total++;
            return true;
        }
        return false
    }
}