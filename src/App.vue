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

            ctx.beginPath();
            ctx.rect(20, 40, 50, 50);
            ctx.fillStyle = '#ff0000';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(160, 10, 100, 40);
            ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
            ctx.stroke();
            ctx.closePath();
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
