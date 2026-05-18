let count=0;
let itcount=0;
let mscount=0;
let hlcount=0;

function showImage(thingName){
    $("img").hide()
    $("body").append("<img height=200 src='"+thingName+".jpg'>")
}

$("#ivantill").click( function(){
    console.log("coral clicker")
    itcount= itcount +1;
    showImage("coral")
    $("#ivantill").html("Looked at Coral " + itcount + " times")

});

$("#mizisua").click( function(){
console.log("plum clicker")
    mscount= mscount +1;
    showImage("plum")
    $("#mizisua").html("Looked at Plum " + mscount + " times")

});

$("#hyuluka").click( function(){
console.log("miku clicker")
    hlcount= hlcount +1;
 showImage("miku")
    $("#hyuluka").html("Looked at Miku " + hlcount + " times")

});

function warning(){
    if (itcount <= 5) { itcount="good..."; }
    else if (itcount > 5) {itcount="STOP!!";}
}

