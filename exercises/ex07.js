// declaring variables 

let count = 0;
let mood = ["Orchid", "Coral", "HotPink", "Plum"]; 
let clickCount=0;

// reusable functions
$("#needy-button").click(function () { 
 
count = count + 1;


console.log("color count "+clickCount);

  $("#needy-button").html( "Clicks: " + count + " Color: " + mood[clickCount] );



    clickCount=clickCount+1;
   
    if (clickCount==4) { 
        clickCount=0;  
    }
});
