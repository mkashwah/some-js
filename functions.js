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


//this function capitalizes the first char in a string
function cap(str){
	return str[0].toUpperCase() + str.slice(1)
}