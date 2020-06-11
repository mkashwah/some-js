// window.setTimeout(function(){
// var input;
// var list = [];

// while (input !== "QUIT"){
// 	input = prompt("What do you want to do?").toUpperCase();
// 	if (input === "LIST"){
// 		console.log(list);
// 	} else if (input === "NEW"){
// 		input = prompt("What do you want to put on the list?");
// 		list.push(input);
// 		console.log(input + " was added to the list");
// 	}
// }



// }, 500);


//Todo v2


window.setTimeout(function(){
var input;
var list = [];

function listItems(item, i){
	console.log(i + ": " + item);
}



while (input !== "QUIT"){
	input = prompt("What do you want to do?").toUpperCase();
	if (input === "LIST"){
		console.log("********");
		list.forEach(listItems);
		console.log("********");
	} else if (input === "NEW"){
		input = prompt("What do you want to put on the list?");
		list.push(input);
		console.log(input + " was added to the list");
	} else if (input === "DELETE"){
		input = prompt("index of item to delete:");
		var deleted = list.splice(input, 1);	//delete 1 item at position of input and save it to var deleted
		// console.log("Todo deleted");
		//check if it was delted or not
		if (deleted.length === 0){
			console.log("Deletion was not successful");

		} else if (deleted.length === 1){
			console.log("Deletion was successful");
			console.log(deleted + " was removed");
		}

	}
}



}, 500);