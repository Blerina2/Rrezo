function shfaqeNdihmenPopUp(){
    let containerNdihmaId = document.getElementById("containerNdihmaId");
    containerNdihmaId.style.display="block";
    containerNdihmaId.style.visibility="visible";
    containerNdihmaId.style.position="absolute";
    containerNdihmaId.style.top="50%";
    containerNdihmaId.style.left="50%";
    containerNdihmaId.style.height="680px";
    containerNdihmaId.style.transform="translate(-50%, -50%)";
    containerNdihmaId.style.zIndex="80";
    containerNdihmaId.style.opacity="0.86";

    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="none";
    containerLoginId.style.visibility="hidden";
}
function mbylleNdihmenPopUp(){
    let containerNdihmaId = document.getElementById("containerNdihmaId");
    containerNdihmaId.style.display="none";
    containerNdihmaId.style.visibility="hidden";
    let containerLoginId= document.getElementById("containerLoginId");
    containerLoginId.style.display="block";
    containerLoginId.style.visibility="visible";
}