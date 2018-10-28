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

            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBall();
                drawPaddle();

                if ((x + dx) > (canvas.width - ballRadius) || (x + dx) < ballRadius) {
                    dx = -dx;
                }

                if ((y + dy) > (canvas.height - ballRadius) || (y + dy) < ballRadius) {
                    dy = -dy;
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
