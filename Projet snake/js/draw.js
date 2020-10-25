const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d")
const scale = 30;
const rows = canvas.height / scale;
const columns = canvas.width / scale;


var snake;

(function setup() {
    var t = 250
    snake = new Snake();
    apple = new apple();
    apple.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        apple.draw();
        snake.update();
        snake.draw();

        if (snake.eat(apple)) {
            apple.pickLocation();
        }
        // changer la valeur par une variable qui prendra une valeur importante pour stopper le jeu et une valeur 250 pour lancer le jeu
    }, 250)
}());

(evt) => {
    console.log(evt)
}



addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))

function visible() {
    document.getElementById('button').className = "test";
}