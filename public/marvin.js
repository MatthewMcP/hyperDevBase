$(function() {
  var pb = new Pandorabot("aiaas.pandorabots.com", "1409612842152", "marvinthehrbot", "a37c4d6ceaeff54c647cf8d65eab1e74");
 
   var 	$textInput = $("#yousay"),
		$talkBtn = $("#talkBtn"),
		$response = $("#marvinSays");
		
	function doTalk() {
		var input = document.getElementById("yousay").value;
		document.getElementById("yousay").value = "";
		pb.talk(input, function(data) {
		  var response = data["responses"];
		  $response.innerHTML = response;
		  console.log(response);
		});
	}
	  
	$textInput.keypress(function (e) {
	  if (e.which == 13) {
		doTalk();
	  }
	});
  
  	$talkBtn.on("click", doTalk)
});