function showStatistikat(){
    let gridContainerMenuContentId = document.getElementById('gridContainerMenuContentId');
    let statistikaId= document.getElementById('statistikaId');
    let newspaperId = document.getElementById('newspaperId');
    let kerkoId= document.getElementById('kerkoId');
    let ndimId = document.getElementById('ndimId');
    let votoId= document.getElementById('votoId');



    if (gridContainerMenuContentId.style.display !== '' || gridContainerMenuContentId.style.display !== 'none'
        && (newspaperId.style.display !== 'none' || statistikaId.style.display!=='none' ||
        kerkoId.style.display!=='none' || ndimId.style.display!=='none' ||votoId.style.display!=='none')) {
        gridContainerMenuContentId.style.display = 'block';
        gridContainerMenuContentId.style.visibility = 'visible';
    } else {
        gridContainerMenuContentId.style.display = 'none';
        gridContainerMenuContentId.style.visibility = 'hidden';
    }
    newspaperId.style.display='none';
    newspaperId.style.visibility='hidden';
    kerkoId.style.display='none';
    kerkoId.style.visibility='hidden';
    ndimId.style.display='none';
    ndimId.style.visibility='hidden';
    votoId.style.display='none';
    votoId.style.visibility='hidden';

    if (statistikaId.style.display === '' || statistikaId.style.display === 'none') {
        statistikaId.style.display = 'block';
        statistikaId.style.visibility = 'visible';
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
    }else{

        statistikaId.style.display = 'none';
        statistikaId.style.visibility = 'hidden';
        gridContainerMenuContentId.style.display = 'none';
        gridContainerMenuContentId.style.visibility = 'hidden';
    }
}
/*https://developers.google.com/chart/interactive/docs/gallery/piechart*/

function drawChart(){
    var data = google.visualization.arrayToDataTable([
        ['Profesorat', 'Popullariteti'],
        ['Avni Rexhepi',     11],
        ['Jeta Dobruna',      4],
        ['Gazmend Pula',  1],
        ['Marjan Dema', 2],
        ['Enver Hamiti',    3]
    ]);

    var options = {
        title: 'Statistikat e javes'
    };

    var chart = new google.visualization.PieChart(document.getElementById('pieChartStatistikaId'));

    chart.draw(data, options);
}

