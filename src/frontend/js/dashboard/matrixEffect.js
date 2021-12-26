// https://www.youtube.com/watch?v=y4K_5CVz7Cs

let myInterval = null;
const canvas = document.getElementById("matrixId");
const kontekst = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const shqip = 'ABCÇDDhEËFGGjHIJKLLlMNNjOPQRRrSShTThUVXXhYZZh';
const numra = '0123456789';
const emptyString = '                                                                    ';

const alfabet = katakana + shqip + numra + emptyString;

const fontsize = 14;
const shtylla = canvas.width / fontsize;
const raindrops = [];
for (let i = 0; i < shtylla; i++) {
    raindrops[i] = 1;
}

let counter = 0;

const vizato = () => {
    kontekst.fillStyle = 'rgba(0,0,0,0.05)';
    kontekst.fillRect(0, 0, canvas.width, canvas.height);
    kontekst.fillStyle = "#FF10e8";
    kontekst.font = fontsize + "px monospace";
    for (let i = 0; i < raindrops.length; i++) {
        const text = alfabet.charAt(Math.floor(Math.random() * alfabet.length));
        kontekst.fillText(text, i * fontsize, raindrops[i] * fontsize);
        kontekst.fillText("Rrezo", canvas.width / 2, canvas.height / 2);
        if (raindrops[i] * fontsize > canvas.height && Math.random() > 0.975) {
            raindrops[i] = 0;
        }
        raindrops[i]++;
    }
    counter++;
    if(counter===150){
        kontekst.clearRect(0,0,canvas.width,canvas.height);
        canvas.style.display='none';
        canvas.style.visibility='none';

        let footergridkontinierbuttons=document.getElementById('footergridkontinierbuttons');
        footergridkontinierbuttons.style.display='block';
        footergridkontinierbuttons.style.visibility='visible';

        let headerDashboard=document.getElementById('headerDashboard');
        headerDashboard.style.display='block';
        headerDashboard.style.visibility='visible';

        let menuButtonId= document.getElementById('menuButtonId');
        menuButtonId.style.display='block';
        menuButtonId.style.visibility='visible';


        const html=document.getElementsByTagName("html")[0];
        html.style.backgroundImage="url(../images/dashboardImagePurple.png)";
    }
}

myInterval = setInterval(vizato, 50);