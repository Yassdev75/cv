function apple() {
    this.x;
    this.y;

    this.pickLocation = function() {
        // this.x = (Math.floor(Math.random() * (canvas.width - 0)));
        // this.y = (Math.floor(Math.random() * (canvas.height - 0)));
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "rgba(88, 9, 185, 1)"
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}