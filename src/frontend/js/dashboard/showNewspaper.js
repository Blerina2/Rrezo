function showNewspaper() {
    let gridContainerMenuContentId = document.getElementById("gridContainerMenuContentId");
    let newspaperId = document.getElementById("newspaperId");
    if (gridContainerMenuContentId.style.display !== '' || gridContainerMenuContentId.style.display !== 'none'
        && (newspaperId.style.display !== '' )) {
        gridContainerMenuContentId.style.display = "block";
        gridContainerMenuContentId.style.visibility = "visible";
    } else {
        gridContainerMenuContentId.style.display = "none";
        gridContainerMenuContentId.style.visibility = "hidden";
    }
    if (newspaperId.style.display === "" || newspaperId.style.display === 'none') {
        newspaperId.style.display = "block";
        newspaperId.style.visibility = "visible";
    }else{

        newspaperId.style.display = "none";
        newspaperId.style.visibility = "hidden";
        gridContainerMenuContentId.style.display = "none";
        gridContainerMenuContentId.style.visibility = "hidden";
    }

}