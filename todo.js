window.setTimeout(function(){
var input;
var list = [];

while (input !== "QUIT"){
	input = prompt("What do you want to do?").toUpperCase();
	if (input === "LIST"){
		console.log(list);
	} else if (input === "NEW"){
		input = prompt("What do you want to put on the list?");
		list.push(input);
		console.log(input + " was added to the list");
	}
}



}, 500);