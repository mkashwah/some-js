//make a function that returs true if number is even and returns false if number is odd
function isEven(num){
	if(num%2 == 0){
		return true;
	} else {
		return false;
	}
}

//factorial 
//already programmed in the other functions file

//kebab to snakes(String str): converts hello-world to hello_world
function callKTS(){
	var strr = prompt("Enter your kebab statement here:");
	
	return kebabToSnake(strr);
}

function kebabToSnake(str){
	var output = "";
	for (let i = 0; i < str.length; i++){
		if (str[i] == "-"){
			 output += "_";
		} else {
			 output += str[i];
		}
	}
	return output;
}

function checkDash(){
	var str = prompt("enter sentence");
	for (var i = 0; i < str.length; i++){
		if (str[i] == "-"){
				console.log("Found dash at " + i);
				} else {

				console.log("not dash at " + i);
			}

	}

	
}
//hello-world-how-is-shit--

//another way to implement kebabToSnake()

function kebabToSnake2(str){
	var str = str.replace(/-/g, "_");
	return str;
}


