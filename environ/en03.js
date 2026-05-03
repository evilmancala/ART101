let environmentTitle = "The Creepiest Forest";

let environmentElements = ["cough from the dust", "jump at your shadow", "shiver from the cold air", "see the stars"];

let count=0

let clickCount = 0
let mainEntity = {
    name: "The Forest",
    isMoving: true,
    favoriteElement: environmentElements
};

$("#tony").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentElement = mainEntity.favoriteElement[arrayPosition];
    
    let message = "<p>You have scanned the forest " + count + " times.</p>";
    message =  message + "<p>You " + environmentElements[clickCount] + ".</p>";
 
    clickCount=clickCount+1;
 
    if (clickCount==4) { 
        clickCount=0;  
    }

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

   

});