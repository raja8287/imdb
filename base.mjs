// function for getting data from omdb server
export async function getData(movie) {
    try {
        let url = `https://www.omdbapi.com/?t=${movie}&apikey=bfef2436`;
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        return 0;
    }
}

// loader animation function 
export function loader(container) {
    container.innerHTML = `<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`
}

// for basic movie format 
export function movieFormat(Poster,Title,Released,Director,imdbRating,Actors,Writer,Plot) {
    return `<h1 class="text-white border-start px-4 mb-5 border-info border-5">Here,<br>is the <span class="text-dark">Movie
            </span>you
            are looking for
        </h1>
        <div class="text-center">
        <img
            src=${Poster}
            alt="no image found">
            </div>
        <div class="mt-5">
            <div class="row gx-2 border-bottom border-warning border-warning">
                <div class="col col-md-2">
                    <p class="my-3 text-white">Title</p>
                </div>
                <div class="col col-md-10">
                    <p class="my-3">${Title}</p>
                </div>
            </div>
             <div class="row gx-2 border-bottom border-warning border-warning">
                <div class="col col-md-2">
                    <p class="my-3 text-white">Released</p>
                </div>
                <div class="col col-md-10">
                    <p class="my-3">${Released}</p>
                </div>
            </div>
             <div class="row gx-2 border-bottom border-warning border-warning">
                <div class="col col-md-2">
                    <p class="my-3 text-white">Director</p>
                </div>
                <div class="col col-md-10">
                    <p class="my-3">${Director}</p>
                </div>
            </div>
            <div class="row gx-2 border-bottom border-warning">
                <div class="col col-md-2 ">
                    <p class="my-3 text-white">imdbRating</p>
                </div>
                <div class="col col-md-10">
                    <p class="my-3">${imdbRating}</p>
                </div>
            </div>
            <div class="row gx-2 border-bottom border-warning">
                <div class="col col-md-2 ">
                    <p class="my-3 text-white">Actors</p>
                </div>
                <div class="col col-md-10">
                    <p class="my-3">${Actors}</p>
                </div>
            </div>
            <div class="row gx-2 border-bottom border-warning">
                <div class="col col-md-2 ">
                    <p class="my-3 text-white">Writer</p>
                </div>
                <div class="col col-md-10">
                    <p class="my-3">${Writer}</p>
                </div>
            </div>
            <div class="row gx-2 border-bottom border-warning">
                <div class="col col-md-2 ">
                    <p class="my-3 text-white">Plot</p>
                </div>
                <div class="col col-md-10">
                    <p class="my-3">${Plot}</p>
                </div>
            </div>
        </div>`
}

