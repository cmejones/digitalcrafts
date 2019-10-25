window.addEventListener("DOMContentLoaded", function () {
    function renderMovies(movieData) {
        var movieHTML = movieData.map(function (currentMovie) {
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

        document.getElementsByClassName("movies-container")[0].innerHTML = movieHTML;
    }

        document.getElementById('search-form').addEventListener('submit', function(e){
            e.preventDefault();
        
        document.getElementById('search-form').onsubmit = renderMovies(movieData);
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



