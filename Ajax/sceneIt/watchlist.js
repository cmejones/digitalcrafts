window.addEventListener("DOMContentLoaded", function () {

    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    renderMovies(watchlist);

});

function renderMovies(movieData) { 
    var movieHTML = movieData.map(function (currentMovie) {
        return `
            <div class="card" style="width: 18rem;">
                <img src= "${currentMovie.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="movie-title">${currentMovie.Title}</h5>
                        <h6 class="date">${currentMovie.Year}</h6><br />
                        <button onclick="removeFromWatchlist('${currentMovie.imdbID}')" class="btn btn-primary";>Remove from my list</button>
                    </div>
            </div>
    `
}).join('');

    document.getElementsByClassName("movies-container")[0].innerHTML = movieHTML;
}

function removeFromWatchlist(imdbID) {
    
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    watchlist = watchlist.filter(function(currentMovie){
        if (currentMovie.imdbID != imdbID) {  
            return true;
        } else return false;
    })

    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    renderMovies(watchlist);  

}
