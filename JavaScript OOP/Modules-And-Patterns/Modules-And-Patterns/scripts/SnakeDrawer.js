'use strict';
var Snake = Snake || {};

Snake.drawer = (function () {

    var CELL_SIZE = 14;

    var appleImg = new Image();
    var borderImg = new Image();
    var stoneImg = new Image();
    var snakeImg = new Image();

    var appleKJS;
    var stoneKJS;
    var borderKJS;
    var snakeKJS;
    var snakeCells = [];

    (function setSources() {
        appleImg.src = 'http://localhost:15526/images/apple.png';

        snakeImg.src = 'http://localhost:15526/images/snake.png';

        stoneImg.src = 'http://localhost:15526/images/stone.png';

        borderImg.src = 'http://localhost:15526/images/border.png';

        appleKJS = new Kinetic.Image({
            name: 'apple',
            image: appleImg,
            width: 14,
            height: 14
        });

        borderKJS = new Kinetic.Image({
            name: 'border',
            image: borderImg,
            width: 14,
            height: 14
        });

        stoneKJS = new Kinetic.Image({
            name: 'stone',
            image: stoneImg,
            width: 14,
            height: 14
        });

        snakeKJS = new Kinetic.Image({
            name: 'snake',
            image: snakeImg,
            width: 14,
            height: 14
        });
    }());

    function border(x, y, layer) {
        borderKJS.setX(x * CELL_SIZE);
        borderKJS.setY(y * CELL_SIZE);
        layer.add(borderKJS.clone());
    }

    function stone(x, y, layer) {
        stoneKJS.setX(x * CELL_SIZE);
        stoneKJS.setY(y * CELL_SIZE);
        layer.add(stoneKJS.clone());
    }

    function apple(x, y, layer) {
        appleKJS.setX(x * CELL_SIZE);
        appleKJS.setY(y * CELL_SIZE);
        layer.add(appleKJS);
    }

    function snake(cell, x, y, layer) {

        if (!snakeCells[cell]) {
            snakeCells[cell] = snakeKJS.clone();
        }

        snakeCells[cell].setX(x);
        snakeCells[cell].setY(y);
        layer.add(snakeCells[cell]);
    }

    function snakeDestroy() {

        for (var i = 1; i < snakeCells.length; i++) {
            snakeCells[i].destroy();
        }

        snakeCells = [];
    }

    return {
        apple: apple,
        border: border,
        stone: stone,
        snake: snake,
        snakeDestroy:snakeDestroy
    }

})();

