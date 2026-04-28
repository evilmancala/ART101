let count = 0;
let buttonCreature = {
    name: "Freakish Fulianos",
    species: " little guy in the code",
    favoriteFood: "0s and 1s",
    moods: ["fatigued", "ecstatic", "joyous", "dramatic", "unfathomable", "bewildered"]
};
$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    
    let message = "<p>You clicked me " + count + " times.</p>";
     message =  message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am a(n) " + buttonCreature.species + ".</p>";
     message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";  

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});