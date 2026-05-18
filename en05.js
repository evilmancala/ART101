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

    $("#out").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

   

});

function askRiddle(whatGuess) {
    let userRiddle = prompt("What's this? A wanderer? I'll leave you be if you can answer this... What's 6+7? ");

    if (userRiddle == whatGuess) {
        $("#output").html("You got it!");
    }
    else if (userRiddle == 67){
        $("#output").html("WRONG.");
    }
    else {
        $("#output").html("Try again~!");
    }
}

$("#question").click(function () {
    askRiddle(13);
});

$(document).ready(function(){
  $("#bye").click(function(){
    $("[src]").hide(1000);
  });
});

$(document).ready(function(){
  $("#hi").click(function(){
    $("[src]").show(1000);
  });
});

$("#creature").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
  }
);

$("#monster").hover(
  function () {
    $("#think").stop(true, true).slideDown(300);
  },
  function () {
    $("#think").stop(true, true).slideUp(300);
  }
);