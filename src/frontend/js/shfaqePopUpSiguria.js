function shfaqePopUpSiguria(){
    let containerSiguriaPopUpId = document.getElementById("containerSiguriaPopUpId");
   containerSiguriaPopUpId.style.display="block";
   containerSiguriaPopUpId.style.visibility="visible";
   containerSiguriaPopUpId.style.position="absolute";
   containerSiguriaPopUpId.style.top="50%";
   containerSiguriaPopUpId.style.left="50%";
   containerSiguriaPopUpId.style.height="680px";
   containerSiguriaPopUpId.style.transform="translate(-50%, -50%)";
   containerSiguriaPopUpId.style.zIndex="80";
   containerSiguriaPopUpId.style.opacity="0.86";

    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="none";
    containerLoginId.style.visibility="hidden";
}
function mbylleSiguriaPopUp(){
    let containerSiguriaPopUpId = document.getElementById("containerSiguriaPopUpId");
   containerSiguriaPopUpId.style.display="none";
   containerSiguriaPopUpId.style.visibility="hidden";
    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="block";
    containerLoginId.style.visibility="visible";
}
    
