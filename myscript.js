$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("img").addClass("border");
	});
	$("#p1").click(function(){
  $(".disappear").hide();
	});
	$("h1").mouseenter(function(){
  $(this).css("background-color", "pink");
});
	$("h1").mouseleave(function(){
  $(this).css("background-color", "lightblue");
});
});
