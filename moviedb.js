var movieDB = [
	{
		name: "Fight Club",
		rating: 4.75,
		hasWatched: true
	},
	{
		name: "Inception",
		rating:4.5,
		hasWatched: true
	},
	{
		name:"Avengers",
		rating: 3,
		hasWatched: false
	}



];

movieDB.forEach(function(movie){
	if (movie.hasWatched === true){
		console.log("You have watched " + movie.name + " - " + movie.rating + " stars");
	} else if (movie.hasWatched === false){
		console.log("You have not watched " + movie.name + " - " + movie.rating + " stars");
	}
	

});