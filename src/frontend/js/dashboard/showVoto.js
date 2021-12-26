function showVoto() {
    let gridContainerMenuContentId = document.getElementById('gridContainerMenuContentId');
    let votoId= document.getElementById('votoId');
    let kerkoId= document.getElementById('kerkoId');
    let ndimId = document.getElementById('ndimId');
    let newspaperId = document.getElementById('newspaperId');
    let statistikaId= document.getElementById('statistikaId');
    if (gridContainerMenuContentId.style.display !== '' || gridContainerMenuContentId.style.display !== 'none'
        && (newspaperId.style.display !== 'none' || statistikaId.style.display !=='none' || ndimId.style.display !=='none'
            || kerkoId.style.display !=='none' || votoId.style.display!=='none')) {
        gridContainerMenuContentId.style.display = 'block';
        gridContainerMenuContentId.style.visibility = 'visible';
    } else {
        gridContainerMenuContentId.style.display = 'none';
        gridContainerMenuContentId.style.visibility = 'hidden';
    }
    statistikaId.style.display='none';
    statistikaId.style.visibility='hidden';
    newspaperId.style.display='none';
    newspaperId.style.visibility='hidden';
    ndimId.style.display='none';
    ndimId.style.visibility='hidden';
    kerkoId.style.display='none';
    kerkoId.style.visibility='hidden';

    if (votoId.style.display === '' ||votoId.style.display === 'none') {
        votoId.style.display = 'block';
        votoId.style.visibility = 'visible';
    }else{

        votoId.style.display = 'none';
        votoId.style.visibility = 'hidden';
        gridContainerMenuContentId.style.display = 'none';
        gridContainerMenuContentId.style.visibility = 'hidden';
    }
shfaqEmrateProfesorave()
}

function shfaqEmrateProfesorave(){
    let profItem = document.getElementById('profItem');

    if (profItem.querySelector("div")===null){
        const emratProfesorave=["Marjan Dema", "Avni Rexhepi", "Enver Hamiti", "Sabrije Osmanaj",
            "Isak Shabani", "Qamil Kabashi", "Dhurate Hyseni", "Vjosa Shatri", "Daline Vranovci", "Jeta Dobruna"];

        for (let i = 0; i < emratProfesorave.length; i++) {
            let data = "<div class=prof-Item-Dinamic draggable=true ondragstart=dragProf(event) " + "id=" + "profName" + i + "Id>" + emratProfesorave[i] + "</div>";
            profItem.innerHTML += data;
        }

    }



}