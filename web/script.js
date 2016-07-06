const LABELTEXT = $("#label").text();

$("#hideLabelButton").click(function(){
	$("#label").hide();
});

$("#showLabelButton").click(function(){
	$("#label").show();
});

$("#changeToGreenButton").click(function(){
	$("#label").addClass("labelInGreen");
	$("#label").removeClass("labelInRed");
});

$("#changeToRedButton").click(function(){
	$("#label").addClass("labelInRed");
	$("#label").removeClass("labelInGreen");
});

$("#changeclassxl").click(function(){
   $("#label").addClass("labelXL");

});


$("#changeclassxs").click(function() {
    $("#label").addClass("labelXS");
    $("#label").removeClass("labelXL");
});

$("#changevalue").click(function () {
    if ($("#label").text() == "Carlos"){
        $("#label").text("lorem ipsum");
    }else{
        $("#label").text(LABELTEXT);
    }

});

function openTabs(){
    localtion.htref("_blank", "www.redsys-canales.com");
    localtion.htref("_blank", "www.redsys.com");
    localtion.htref("_blank", "www.redsys-canales.com");
    localtion.htref("_blank", "www.redsys-canales.com");
}

$("#deltext").click(function () {
    $("#label").empty();

});


//funciones para deberes
/* para mas info mirar http://www.w3schools.com/jquery/default.asp */

$("#").click(function(){	
});
