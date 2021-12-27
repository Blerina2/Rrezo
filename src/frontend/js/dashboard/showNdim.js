function showNdim() {
    let gridContainerMenuContentId = document.getElementById('gridContainerMenuContentId');
    let ndimId = document.getElementById('ndimId');
    let newspaperId = document.getElementById('newspaperId');
    let statistikaId= document.getElementById('statistikaId');
    let kerkoId= document.getElementById('kerkoId');
    let votoId= document.getElementById('votoId');


    if (gridContainerMenuContentId.style.display !== '' || gridContainerMenuContentId.style.display !== 'none'
        && (newspaperId.style.display !== 'none' || statistikaId.style.display !=='none' || ndimId.style.display !=='none'
        || kerkoId.style.display!=='none' || votoId.style.display!=='none')) {
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
    kerkoId.style.display='none';
    kerkoId.style.visibility='hidden';
    votoId.style.display='none';
    votoId.style.visibility='hidden';

    if (ndimId.style.display === '' || ndimId.style.display === 'none') {
        ndimId.style.display = 'block';
        ndimId.style.visibility = 'visible';
    }else{

        ndimId.style.display = 'none';
        ndimId.style.visibility = 'hidden';
        gridContainerMenuContentId.style.display = 'none';
        gridContainerMenuContentId.style.visibility = 'hidden';
    }

}