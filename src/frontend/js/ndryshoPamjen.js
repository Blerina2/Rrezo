function ndryshoPamjen(){
    debugger;
    if(getComputedStyle(document.documentElement).getPropertyValue("--clr-background-color") === "black"  ){
        document.documentElement.style.setProperty('--clr-neon', 'hsl(212,100%,54%)');
        document.documentElement.style.setProperty('--clr-bg', 'hsl(162, 21%, 16%)');
        document.documentElement.style.setProperty('--clr-neon-light', 'hsl(223, 100%, 64%)');
        document.documentElement.style.setProperty('--clr-purple', 'hsl(198, 66%, 59%)');
        document.documentElement.style.setProperty('--clr-neon-qelt', '');
        document.documentElement.style.setProperty('--clr-neon-mshelt', '');
        document.documentElement.style.setProperty('--clr-neon-zi', '');
        document.documentElement.style.setProperty('--clr-coral', '');
        document.documentElement.style.setProperty('--clr-pink-bardh', '');
        document.documentElement.style.setProperty('--clr-pink-qelt', '');
        document.documentElement.style.setProperty('--clr-lekure', '');
        document.documentElement.style.setProperty('--clr-kuq-qelt', '');
        document.documentElement.style.setProperty('--clr-sdi', '');

    } else {
        document.documentElement.style.setProperty('--clr-neon', 'hsl(317 100% 54%)');
        document.documentElement.style.setProperty('--clr-bg', 'hsl(323 21% 16%)');
        document.documentElement.style.setProperty('--clr-neon-light', '#f046ff');
        document.documentElement.style.setProperty('--clr-purple', 'purple');
        document.documentElement.style.setProperty('--clr-neon-qelt', '#FF10e8');
        document.documentElement.style.setProperty('--clr-neon-mshelt', '#ba24c2');
        document.documentElement.style.setProperty('--clr-neon-zi', '#d43ddb');
        document.documentElement.style.setProperty('--clr-coral', 'lightcoral');
        document.documentElement.style.setProperty('--clr-pink-bardh', '#edbef1');
        document.documentElement.style.setProperty('--clr-pink-qelt', 'lightpink');
        document.documentElement.style.setProperty('--clr-lekure', 'papayawhip');
        document.documentElement.style.setProperty('--clr-kuq-qelt', '#e5ccc9');
        document.documentElement.style.setProperty('--clr-sdi', '#e88bee');

    }

}