function showMenu() {
    const navs = document.getElementsByClassName('nav') ;
    let gridContainerMenuContentId = document.getElementById('gridContainerMenuContentId');
    let newspaperId = document.getElementById('newspaperId');
    const navsLength = navs.length ;

    for ( let i =0 ; i < navsLength ; i++) {
        const nav = document.getElementsByClassName('nav')[i];
        if (nav.classList.contains('small')){
            nav.classList.remove('small');
        } else{
            nav.classList.add('class','small');
            gridContainerMenuContentId.style.display ='none';
            gridContainerMenuContentId.style.visibility = 'hidden';
            newspaperId.style.display = 'none';
            newspaperId.style.visibility = ' hidden';
        }
    }

}
