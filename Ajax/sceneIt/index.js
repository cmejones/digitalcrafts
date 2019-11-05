window.addEventListener("DOMContentLoaded", function () {

    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    renderMovies(watchlist);

});

window.addEventListener("DOMContentLoaded", function () {
    function renderMovies(movies) {
        var movieHTML = movies.map(function (currentMovie) {
            return `
                <div class="card" style="width: 18rem;">
                    <img src= "${currentMovie.Poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="movie-title">${currentMovie.Title}</h5>
                            <h6 class="date">${currentMovie.Year}</h6><br />
                            <button onclick="saveToWatchlist('${currentMovie.imdbID}')" id="saveButton_${currentMovie.imdbID}" class="btn btn-primary";>Save to my list</button>
                        </div>
                </div>
        `
    }).join('');

    }

        document.getElementById('search-form').addEventListener('submit', function(e){
            e.preventDefault();
            var searchString = document.getElementsByClassName('search-bar')[0].value; 

            var urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response){
    
        document.getElementsByClassName("movies-container")[0].innerHTML = renderMovies(response.data.Search);
        movieData = response.data.Search;
        });

    })

});

function saveToWatchlist(imdbID) {
    
    var movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });

    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
        if (watchlist == null) {
            watchlist = [];
        } 
    watchlist.push(movie); 


    var movieButton = document.getElementById(`saveButton_${imdbID}`);
    movieButton.innerHTML = "Saved!";
    movieButton.className = ("disabled");


    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}