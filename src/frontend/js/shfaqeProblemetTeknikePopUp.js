function shfaqeProblemetTeknikePopUp(){
    let containerProblemetTeknikeId = document.getElementById("containerProblemetTeknikeId");
    containerProblemetTeknikeId.style.display="block";
    containerProblemetTeknikeId.style.visibility="visible";
    containerProblemetTeknikeId.style.position="absolute";
    containerProblemetTeknikeId.style.top="50%";
    containerProblemetTeknikeId.style.left="50%";
    containerProblemetTeknikeId.style.height="680px";
    containerProblemetTeknikeId.style.transform="translate(-50%, -50%)";
    containerProblemetTeknikeId.style.zIndex="80";
    containerProblemetTeknikeId.style.opacity="0.86";

    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="none";
    containerLoginId.style.visibility="hidden";
}
function mbylleProblemetTeknikePopUp(){
    let containerProblemetTeknikeId = document.getElementById("containerProblemetTeknikeId");
    containerProblemetTeknikeId.style.display="none";
    containerProblemetTeknikeId.style.visibility="hidden";
    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="block";
    containerLoginId.style.visibility="visible";
}