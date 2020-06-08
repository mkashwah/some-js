console.log("Print all numbers between -10 and 19");

for (var i = -10; i <= 19; i++){
	console.log(i);
}

console.log("Print all even numbers between 10 and 40");
for(let i = 10; i <= 40; i++){
		if(i%2 == 0){
			console.log("even number is: " + i);
		}

}

console.log("Print all odd numbers between 333 and 300");
for(let i = 333; i >= 300; i--){
		if(i%2 != 0){
			console.log("odd number is: " + i);
		}

}

console.log("divisable numbers by 3 AND 5 between 5 and 50");
for(let i = 5; i <= 50; i++){
		if(i%3 == 0 && i%5 == 0){
			console.log("divisible number is: " + i);
		}



}

