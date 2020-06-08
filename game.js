var found = false;
const num = 10;
while(found === false){
	var guess = Number(prompt("Please guess the number:"));
	if (guess < num){
		alert("The number is bigger than " + guess);
	}else if(guess > num){
		alert("The number is smaller than " + guess);

	}else{
		alert("You found the right number that is " + num);
		found = true;
	}
}