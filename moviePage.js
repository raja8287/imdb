// imports 
import { getData, loader, movieFormat } from "./base.mjs";

// selectors 
const container = document.querySelector('.container')
let message = document.querySelector('.message')
let messageContent = document.querySelector('.messageContent')

// onload tasks 
const urlParams = new URLSearchParams(window.location.search);
const movieName = urlParams.get('movie');
renderDetails(movieName)


// function for rendering full movie details 
async function renderDetails(movieName) {
   loader(container)
    let data = await getData(movieName)
    if (data.Response === "True") {
        container.innerHTML = movieFormat(data.Poster,data.Title,data.Released,data.Director,data.imdbRating,data.Actors,data.Writer,data.Plot, data.imdbVotes)
        favBtn(data)
    }
    else {
        notFound()
    }
}



// function to call if no movie found 
function notFound() {
    container.innerHTML = `<h1 class="border-start border-info px-3 text-white">No Such <span class="text-dark">Movie</span> Found</h1>`
}



// add favorite button 
function favBtn(data) {
    let favBtn = document.createElement('button');
    favBtn.textContent = "Add to Favourite"
    favBtn.classList.add("mt-5", "px-4", "py-2", "rounded", "btn", "btn-dark", "border", "border-dark", "rounded-pill")
    container.appendChild(favBtn)
    // event for fav button 
    favBtn.addEventListener("click", () => addToFavourite(data))
}


// adding in favourite array section or into local Storage
function addToFavourite(data) {
    let fav = []
    if (localStorage.getItem("movies") == null) {
        fav.push(data)
        localStorage.setItem("movies", JSON.stringify(fav))
        displayMessage("Added into Favourites")
    }
    else {
        fav = JSON.parse(localStorage.getItem('movies'));
        let present = fav.find(current => current.Title === data.Title);

        if (!present) {
            fav.push(data);
            localStorage.setItem("movies", JSON.stringify(fav));
            displayMessage("Added into Favourites")
        } else {
            displayMessage("Already Added to Favourites")
        }
    }
}


// funtion for displaying message after clicking addto Fav
function displayMessage(content) {
    message.classList.add('messageAdvanced')
    messageContent.textContent = `"${movieName}" ${content}`
    setTimeout(() => {
        message.classList.remove('messageAdvanced')
    }, 2000);
}
