<template>
    <div id="app">
        <canvas id="canvas" width="480" height="320"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted() {
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            const ballRadius = 10;
            const paddleHeight = 10;
            const paddleWidth = 75;

            let x = canvas.width / 2;
            let y = canvas.height - 30;
            let dx = 2;
            let dy = -2;
            let paddleX = (canvas.width - paddleWidth) / 2;
            let rightPressed = false;
            let leftPressed = false;

            const brickRowCount = 3;
            const brickColumnCount = 5;
            const brickWidth = 75;
            const brickHeight = 20;
            const brickPadding = 10;
            const brickOffsetTop = 30;
            const brickOffsetLeft = 30;

            let bricks = [];

            for (let c = 0; c < brickColumnCount; c++) {
                bricks[c] = [];

                for (let r = 0; r < brickRowCount; r++) {
                    bricks[c][r] = { x: 0, y: 0, status: 1 };
                }
            }

            const drawBricks = () => {
                for (let c = 0; c < brickColumnCount; c++) {
                    for (let r = 0; r < brickRowCount; r++) {
                        if (bricks[c][r].status === 1) {
                            const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                            const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;

                            bricks[c][r].x = brickX;
                            bricks[c][r].y = brickY;

                            ctx.beginPath();
                            ctx.rect(brickX, brickY, brickWidth, brickHeight);
                            ctx.fillStyle = '#0095dd';
                            ctx.fill();
                            ctx.closePath();
                        }
                    }
                }
            }

            const drawBall = () => {
                ctx.beginPath();
                ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
                ctx.fillStyle = '#0095dd';
                ctx.fill();
                ctx.closePath();
            }

            const drawPaddle = () => {
                ctx.beginPath();
                ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
                ctx.fillStyle = '#0095dd';
                ctx.fill();
                ctx.closePath();
            }

            const collisionDetection = () => {
                for (let c = 0; c < brickColumnCount; c++) {
                    for (let r = 0; r < brickRowCount; r++) {
                        let b = bricks[c][r];

                        if (b.status === 1) {
                            if ((x > b.x) && (x < (b.x + brickWidth)) && (y > b.y) && (y < (b.y + brickHeight))) {
                                dy = -dy;
                                b.status = 0;
                            }
                        }
                    }
                }
            };

            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBricks();
                drawBall();
                drawPaddle();
                collisionDetection();

                if ((x + dx) > (canvas.width - ballRadius) || (x + dx) < ballRadius) {
                    dx = -dx;
                }

                if ((y + dy) < ballRadius) {
                    dy = -dy;
                } else if ((y + dy) > (canvas.height - ballRadius)) {
                    if ((x > paddleX) && (x < (paddleX + paddleWidth))) {
                        dy = -dy;
                    } else {
                        alert('GAME OVER');
                        document.location.reload();
                    }
                }

                if (rightPressed && paddleX < (canvas.width - paddleWidth)) {
                    paddleX += 7;
                } else if (leftPressed && paddleX > 0) {
                    paddleX -= 7;
                }

                x += dx;
                y += dy;
            };

            document.addEventListener('keydown', (event) => {
                if (event.keyCode === 39) {
                    rightPressed = true;
                } else if (event.keyCode === 37) {
                    leftPressed = true;
                }
            }, false);

            document.addEventListener('keyup', (event) => {
                if (event.keyCode === 39) {
                    rightPressed = false;
                } else if (event.keyCode === 37) {
                    leftPressed = false;
                }
            }, false);

            setInterval(draw, 10);
        }
    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        align-items: center;
        color: #2c3e50;
        display: flex;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        height: 100%;
        justify-content: center;
        text-align: center;
    }

    body, html {
        height: 100%;
    }

    canvas {
        background: #eee;
    }

    * {
        margin: 0;
        padding: 0;
    }
</style>
