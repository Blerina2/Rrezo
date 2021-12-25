function shfaqePopupPerdoruesit(){
    const profiliOpsion = document.getElementById('ProfiliOpsion');
    if (profiliOpsion.style.display === 'none' || profiliOpsion.style.visibility === 'hidden' ){
        profiliOpsion.style.display = 'block';
        profiliOpsion.style.visibility = 'visible';
    }
    else{
        profiliOpsion.style.display = 'none';
        profiliOpsion.style.visibility = 'hidden';

    }
}
