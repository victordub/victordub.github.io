$(document).ready(function() {
	$("#start").click(function() {
		$("#red").animate({left: '200px', height: '200px', width: '300px'});
		$("#green").animate({right: '200px', height: '200px', width: '300px'});
		$("#yellow").animate({left: '200px', height: '200px', width: '300px'});
		$("#blue").animate({right: '200px', height: '200px', width: '300px'});
	}
)});