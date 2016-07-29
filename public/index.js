$(function() {
  var $usernameInput = $("#UsernameInput"),
		$submitUsernameBtn = $("#submitUsernameBtn"),
		$existingUserDiv = $("#existingUserDiv"),
		$passwordInput = $("#passwordInput"),
		$submitPasswordBtn = $("#submitPasswordBtn"),
		$loginError = $("#loginError"),
		$newUserDiv = $("#newUserDiv"),
		$newPassword1 = $("#newPassword1Input"),
		$newPassword2 = $("#newPassword2Input"),
		$createAccBtn = $("#createAccountBtn"),
		$useRegAlert = $("#userRegisteredAlert"),
		$notMatchAlert = $("#passwordNotMatchAlert");

	//TODO Move to shared
	function hasValue(obj, key, value) {
		return obj.hasOwnProperty(key) && obj[key] === value;
	}
	
	function submitUsernameBtnClickHandler(){
		event.preventDefault();
		  
		var username = $usernameInput.val();

		$.get("/getuserdata", function( data ) {
		  if(data.some(function(obj) { return hasValue(obj, "username", username); })){
			   $newUserDiv.myHide();    
			   $existingUserDiv.myShow();
		  }
		  else{
		    $newUserDiv.myShow();
		    $existingUserDiv.myHide();
		  }
		});
	}
	$submitUsernameBtn.on("click", submitUsernameBtnClickHandler)
	
	
	function submitPasswordBtnClickHandler(){
		event.preventDefault();
		
		var pword = $passwordInput.val();
		// TODO if passowrd in.. 
		if(true)
		{

		}
		else{
			show("#loginError");
		}
	}
	$submitPasswordBtn.on("click", submitPasswordBtnClickHandler)
		
	function createAccBtnClickHandler(){
		event.preventDefault();
		var pword1 = $newPassword1.val();
		var pword2 = $newPassword2.val();
		
		if(pword1 === pword2)
		{
			hide("#passwordNotMatchAlert");
			
			//TODO Send Password
			
			$(this).closest('form').find("input[type=text], input[type=password], textarea").val("");
			show("#userRegisteredAlert");
			hide("#NewUserDiv");
		}
		else{
			show("#passwordNotMatchAlert");
		}
	}
	$createAccBtn.on("click", createAccBtnClickHandler)
});
