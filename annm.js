
while(1){
	var reply = prompt("Are we there yet?", "Yes or no").toUpperCase();
	if(reply == "YES" || reply == "YEAH"){
		alert("Congrats, we made it!");
		break;
	}

}
alert("Version 2");
while(1){
	var reply = prompt("Are we there yet?", "Yes or no").toUpperCase();
	var test = reply.indexOf("YES") !== -1 || reply.indexOf("YEAH") !== -1 ;  //returns boolean false if YES does not exist in the answer
	if (test === true){
		alert("Congrats, we made it!");
		break;
	}

}