window.addEventListener("DOMContentLoaded", function () {
    function renderMovies(movieData) {
        var movieHTML = movieData.map(function (currentMovie) {
            //var movieHTML = movieData.localStorage.getItem('watchlist');
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
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    renderMovies(watchlist);

});