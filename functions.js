function showAlert(){
	alert("Connected");
}

//function with arguments
function square(num){
	let n = num * num;
	return n;
}

function factorial(num){
	if (num >= 1){
		return num * factorial(num - 1);
	} else {
		return 1;
	}
}


//taking multiple arguments
function createGamer(name, age){
	console.log("Gamer "+ name + " was created. Age = " + age);
}
