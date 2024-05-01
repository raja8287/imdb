
// selectors 
const moviesSection=document.querySelector('.movies')

// for rendering fav movies 
function renderfav(movies) {
    movies.forEach(movie => {
        moviesSection.innerHTML += `<div class="rounded mb-5 bg-white p-3">
            <div class="row gx-5 ">
                <div class="col-auto"><img  src=${movie.Poster} alt="image not found"></div>
                <div class="col-md col-sm-12 pt-4">
                <p>${renderGenre(movie.Genre)}</p>
                    <p class="fs-5">${movie.Title} | <small class="text-primary">${movie.imdbRating} <i class="fa-solid fa-star"></i>
                    </small>
                    </p>
                    <p class="text-secondary"><small>${movie.Released}</small></p>
                    <p class="fs-6">${movie.Plot}</p>
            
                    <a href="./moviePage.html?movie=${movie.Title}" class="my-2 col-auto btn btn-dark">Show Details</a>
                    <a class="my-2 col-auto btn btn-warning" onclick="remove(event,'${movie.imdbID}')">Delete from Favourite </a>
                    
            </div>
        </div>
        </div >`
        
    });
}

// for rendering all genre into separately  
function renderGenre(Genres) {
    let finalHtml = ""
    for (Genres of Genres.split(",")){
        finalHtml += `<small class="rounded btn btn-primary me-2 px-3">${Genres}</small>`
   }
    return finalHtml;
}

// for removing movie from favourites 

function remove(event, movieID) {
    event.target.parentNode.parentNode.parentNode.remove()
    let array = JSON.parse(localStorage.getItem("movies"))
    array = array.filter(current => {
        if (current.imdbID != movieID) {
            return current;
        }
    })
    localStorage.setItem("movies", JSON.stringify(array))
}



// accessing local storage 
let movies = JSON.parse(localStorage.getItem("movies"))


renderfav(movies)