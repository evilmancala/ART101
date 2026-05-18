$("#crAdd").click(function () {

    let crName=$("#crName").val();
    console.log(crName);


if(crName.length > 2) {
 $("#creature-list").append("<div>" +crName+"</div>");

   
}

else{
        
    $("#crName").val(""); //write value
    //$("#crName").val(); //retreive the value

}
    
});
