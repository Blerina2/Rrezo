
$(document).ready(function(){

    $("#avniRexhepiid2").css("color", "red");
    $("#avniRexhepiid2").css("font-style", "italic");
    $("#marjanDemaid2").css("color", "red");
    $("#marjanDemaid2").css("font-style", "italic");
    $("#skenderAhmetajid2").css("color", "red");
    $("#skenderAhmetajid2").css("font-style", "italic");
    $("#jetaDobrunaid2").css("color", "red");
    $("#jetaDobrunaid2").css("font-style", "italic");
    $("#yllkaKabashiid2").css("color", "red");
    $("#yllkaKabashiid2").css("font-style", "italic");
    $("#sabrijeOsmanajid2").css("color", "red");
    $("#sabrijeOsmanajid2").css("font-style", "italic");
    $("#enkeleRamaid2").css("color", "red");
    $("#enkeleRamaid2").css("font-style", "italic");
    $("#dardanShabaniid2").css("color", "red");
    $("#dardanShabaniid2").css("font-style", "italic");
    $("#haxhiDacajid2").css("color", "red");
    $("#haxhiDacajid2").css("font-style", "italic");
    $("#enverHamitiid2").css("color", "red");
    $("#enverHamitiid2").css("font-style", "italic");
    $("form").css("background-color", "white");
    $("form").css("margin", "auto");
    $("form").css("width", "15%");
    $("form").css("padding", "40px");
    $("#votoId").css("background-color", "white");
    $("#votoId").css("border-radius", "12px");
    $('#myForm :checkbox').change(function() {
        // this will contain a reference to the checkbox
        if (this.checked) {
            alert("A jeni i sigurt per kete zgjedhje?")
        } else {
            // the checkbox is now no longer checked
        }
    });
});
