function terheqeProf(event){
    event.preventDefault();
    let data =event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));


}
function leshoTerheqjenProf(event){
    event.preventDefault();

}
function terheqeEmoji(event){
    event.preventDefault();
    let data =event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));

}
function leshoTerheqjenEmoji(event){
    event.preventDefault();
}
function drag(event){
    event.dataTransfer.setData("Text",event.target.id);
}
function dergoVotimin(){
    alert("Keni derguar votimin");

}