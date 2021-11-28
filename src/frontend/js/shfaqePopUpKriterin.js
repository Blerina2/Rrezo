function shfaqePopUpKriter(){
    let containerKriterPopUpId = document.getElementById("containerKriterPopUpId");
    containerKriterPopUpId.style.display="block";
    containerKriterPopUpId.style.visibility="visible";
    containerKriterPopUpId.style.position="absolute";
    containerKriterPopUpId.style.top="50%";
    containerKriterPopUpId.style.left="50%";
    containerKriterPopUpId.style.height="680px";
    containerKriterPopUpId.style.transform="translate(-50%, -50%)";
    containerKriterPopUpId.style.zIndex="80";
    containerKriterPopUpId.style.opacity="0.86";

    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="none";
    containerLoginId.style.visibility="hidden";
}
function mbylleKriterinPopUp(){
    let containerKriterPopUpId = document.getElementById("containerKriterPopUpId");
    containerKriterPopUpId.style.display="none";
    containerKriterPopUpId.style.visibility="hidden";
    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="block";
    containerLoginId.style.visibility="visible";
}