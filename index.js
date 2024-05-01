// imports 
import { getData, loader } from './base.mjs';

// selectors 
let suggestions = document.getElementById('suggestions')
let movieSection = document.querySelector('.movie')

// for suggestions according to the movie input 
movieSection.addEventListener('keyup', async () => {
    if (movieSection.value == "") {
        suggestions.innerHTML = ""
    }
    else {
        let movie = await getData(movieSection.value)
        if (movie.Response == "True") {
            suggestions.innerHTML = `<a class="text-start btn btn-dark text-white border border-dark" style="width:243px" href="./moviePage.html?movie=${movie.Title.split(' ').join('+')}">${movie.Title}</a>`
        }
    }
})