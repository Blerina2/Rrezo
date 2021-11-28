/*https://codepen.io/amit_sheen*/
let cover = [];
const cwidth = 840;
const cheight = 420;

const c = document.getElementById("mainCanvas");
c.width = cwidth;
c.height = cheight;

const ctx = c.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, cwidth, cheight);

window.onload = function () {
    drawCover();
    Run();
}
let coverCount = 0;

function drawCover() {

    const tempc = document.createElement("CANVAS");
    tempc.width = 840;
    tempc.height = 420;
    const tctx = tempc.getContext("2d");

    tctx.textAlign = "center";
    tctx.fillStyle = "blue";

    tctx.font = "100px Lobster";
    tctx.fillText("Rrezo", 420, 250);

    cover = tctx.getImageData(0, 0, 840, 420).data;

    coverCount++
    if (coverCount < 10) {
        setTimeout(function () {
            drawCover();
        }, 2000);
    }
}

let bubbles = [];
let bgc = 0;
let lastRun = 0;
let dt;

function Run() {

    if (lastRun == 0) {
        dt = 1;
    } else {
        dt = Math.min(50, (performance.now() - lastRun));
    }
    lastRun = performance.now();

    if (bubbles.length < 15) {
        if ((bubbles.length == 0) || (bubbles[bubbles.length - 1][3] > 5)) {
            bubbles.push([0, 0, 0, 100])
        }
    }

    bubbles.forEach(function (bubble) {

        if (bubble[3] < 100) {

            bubble[3] = bubble[3] + (dt / 30);
            ctx.beginPath();
            ctx.arc(bubble[0], bubble[1], bubble[3], 0, 2 * Math.PI);

            let a = ((20 - Math.abs(20 - (30 - Math.abs(20 - (Math.abs(50 - bubble[3])))))) * 0.05);

            //ctx.strokeStyle = "rgba(" + bubble[2] + "," + a + ")"
            ctx.strokeStyle = "rgba(255, 20, 189," + a + ")"
            ctx.stroke();

        } else {
            bubble[0] = 100 + (Math.floor(Math.random() * (cwidth - 200)));
            bubble[1] = 100 + (Math.floor(Math.random() * (cheight - 200)));
            bubble[2] = (
                (10 + Math.floor(Math.random() * 50)) + ',' +
                (10 + Math.floor(Math.random() * 150)) + ',' +
                (50 + Math.floor(Math.random() * 100)));
            bubble[3] = (0);
        }
    });
    let imgData = ctx.getImageData(0, 0, 840, 420);
    let cd = dt / 4;
    let fd = ((cover.length < 10) ? cd : (dt / 32));
    let Data = imgData.data;

    for (let i = 0; i < Data.length; i += 4) {
        Data[i + 0] = Data[i + 0] - ((cover[i + 3] < 127) ? cd : fd);
        Data[i + 1] = Data[i + 1] - ((cover[i + 3] < 127) ? cd : fd);
        Data[i + 2] = Data[i + 2] - ((cover[i + 3] < 127) ? cd : fd);
    }

    ctx.putImageData(imgData, 0, 0);
    requestAnimationFrame(Run);
}

