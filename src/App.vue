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

            let x = canvas.width / 2;
            let y = canvas.height - 30;

            const dx = 2;
            const dy = -2;

            const drawBall = () => {
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, Math.PI * 2);
                ctx.fillStyle = '#0095dd';
                ctx.fill();
                ctx.closePath();
            }

            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBall();

                x += dx;
                y += dy;
            };

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
