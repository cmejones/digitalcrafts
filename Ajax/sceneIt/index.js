window.addEventListener("DOMContentLoaded", function () {
    function renderMovies(movies) {
        var movieHTML = movies.map(function (currentMovie) {
            return `
                <div class="card" style="width: 18rem;">
                    <img src= "${currentMovie.Poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="movie-title">${currentMovie.Title}</h5>
                            <h6 class="date">${currentMovie.Year}</h6><br />
                            <button onclick="saveToWatchlist('${currentMovie.imdbID}')" class="btn btn-primary";>Add</button>
                        </div>
                </div>
        `
    }).join('');
    return movieHTML;  
    }

        document.getElementById('search-form').addEventListener('submit', function(e){
            e.preventDefault();
            var searchString = document.getElementsByClassName('search-bar')[0].value; 
        //console.log(searchString); 
            var urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response){
            console.log(response.data.Search);
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

    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    console.log("movie2", movie);
}



