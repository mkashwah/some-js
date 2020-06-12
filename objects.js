var dog = {
	name: "woof woof",
	age: 3
};

//arrays vs objects
//arrays are bound to indices... objects are like dictionaries in python

//nested objects and arrays
var posts = [
	{
		title: "title 1",
		author: "author 1",
		comments:["awesome","not awesome"]
	},
	{
		title: "title 2",
		author: "author 2",
		comments: ["aaa", "bbb"]
	}
]

//adding methods to an object
var obj = {
	name: "bob",
	profession: "builder",
	age: 40,
	friends: ["rob", "flop"],
	add: function(x,y){
		return x+y;
	}
}

var comments = {

};

comments.data = ["good", "bad", "lol"];
// function print(array){
// 	array.forEach(function(el){
// 		console.log(el);
// 	});
// }

comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}