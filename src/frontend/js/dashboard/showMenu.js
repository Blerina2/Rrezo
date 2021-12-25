function showMenu() {
    const navs = document.getElementsByClassName("nav") ;

    const navsLength = navs.length ;

    for ( let i =0 ; i < navsLength ; i++) {
        const nav = document.getElementsByClassName("nav")[i];
        if (nav.classList.contains("small")){
            nav.classList.remove("small");
        } else{
            nav.classList.add("class","small");
        }
    }

}
