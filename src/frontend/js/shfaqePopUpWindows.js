function shfaqePopUp(){
    let containerKontaktPopupId = document.getElementById("containerKontaktPopupId");
    containerKontaktPopupId.style.display="block";
    containerKontaktPopupId.style.visibility="visible";
    containerKontaktPopupId.style.position="absolute";
    containerKontaktPopupId.style.top="50%";
    containerKontaktPopupId.style.left="50%";
    containerKontaktPopupId.style.height="680px";
    containerKontaktPopupId.style.transform="translate(-50%, -50%)";
    containerKontaktPopupId.style.zIndex="80";
    containerKontaktPopupId.style.opacity="0.86";

    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="none";
    containerLoginId.style.visibility="hidden";
}
function mbylleKontaktinPopUp(){
    let containerKontaktPopupId = document.getElementById("containerKontaktPopupId");
    containerKontaktPopupId.style.display="none";
    containerKontaktPopupId.style.visibility="hidden";
    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="block";
    containerLoginId.style.visibility="visible";
}
function dergojeMesazhin(){
    let plotsimiEmriId=document.getElementById("plotsimiEmriId");
    let plotsimiImelliId=document.getElementById("plotsimiImelliId");
    let plotsimiTekstitId=document.getElementById("plotsimiTekstitId");

    if(plotsimiTekstitId.value && plotsimiImelliId.value && plotsimiTekstitId.value ){
        alert("janeplotsuartegjithafushat");
    }

}