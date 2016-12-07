$(document).ready(function() {
	$("#start").click(function() {
		$("#red").animate({left: '200px', height: '200px', width: '300px'});
		$("#green").animate({right: '200px', height: '200px', width: '300px'});
		$("#yellow").animate({left: '200px', height: '200px', width: '300px'});
		$("#blue").animate({right: '200px', height: '200px', width: '300px'});
	}
)});
function movetwitter(event) {
	var keynum;

    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }
    if (keynum == 39) {
   		$("#player").animate({
   			left: "+=10"
   		}, 10);
   	} 
	if (keynum == 37) {
		$("#player").animate({
			left: "-=10"
		}, 10);
	}
	if (keynum == 38) {
		$("#player").animate({
			top: "-=10"
		}, 10);
	} 
	if (keynum == 40) {
		$("#player").animate({
			top: "+=10"
		}, 10);
	} 

}