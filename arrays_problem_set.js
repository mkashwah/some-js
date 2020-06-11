//printReverse()

function printReverse(array){
	var len = array.length;
	var arr = [];

	for (let i = 0; i < len; i++){
		arr[i] = array[len-1-i];
		console.log(arr[i]);
	}

}

//////////////////
//isUniform()

function isUniform(array){
	var firstElement = array[0];	//this can be removed
	var boolean = true;
	
		for (let i = 1; i < array.length; i++){
			if (array[i] !== firstElement){
				boolean = false;
				break;
			}
		}
	
	return boolean;

}

//////////
//sumArray()

function sumArray(array){
	var sum = 0;
	array.forEach(function(i){
		sum = sum + i;
	});
	return sum;
}

///////////
//max(): return max element in an array of numbers

function max(array){
	var maxNum = array[0];
	array.forEach(function(i){
		if (i > maxNum){
			maxNum = i;
		}

	});
	return maxNum;
}




