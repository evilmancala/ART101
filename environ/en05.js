let environmentTitle = "The Creepiest Forest";

let environmentElements = ["cough from the dust", "jump at your shadow", "shiver from the cold air", "see the stars"];

let count=0


/// for the first button to let you click
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
    
    let message = "<p>You have scanned the forest " + count + " times.</p>"; /// the # of clicks
    message =  message + "<p>You " + environmentElements[clickCount] + ".</p>"; ///where you get the forest details a
 
    clickCount=clickCount+1;
 
    if (clickCount==4) { 
        clickCount=0;  
    }

    $("#out").html(message); ///how to get the messages to show up

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

   

});

/// Riddle time...

function askRiddle(whatGuess) {
    let userRiddle = prompt("What's this? A wanderer? I'll leave you be if you can answer this... What's 6+7? ");

    if (userRiddle == whatGuess) {
        $("#output").html("You got it!");
    }
    else if (userRiddle == 67){
        $("#output").html("WRONG."); /// secret third option for riddle. brainrot
    }
    else {
        $("#output").html("Try again~!"); ///also occurs when you accidentially click off the screen
    }
}


$("#question").click(function () {
    askRiddle(13);
}); /// the correct answer


/// button toggles for images
$(document).ready(function(){
  $("#bye").click(function(){
    $("[src]").hide(1000); ///hides img
  });
});

$(document).ready(function(){
  $("#hi").click(function(){
    $("[src]").show(1000); ///shows img
  });
});

/// how to have creatures think 
$("#creature").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
  }
);

/// had to make a second one bc i could only do one img at a time
$("#monster").hover(
  function () {
    $("#think").stop(true, true).slideDown(300);
  },
  function () {
    $("#think").stop(true, true).slideUp(300);
  }
);