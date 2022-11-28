//  Create, append, set src and id to logo
const logo = document.createElement("img");
document.body.append(logo);
logo.src = "studio_ghibli_logo.svg";
logo.setAttribute("id", "logo");

// Create and append main element
const mainElement = document.createElement("main");
document.body.append(mainElement);

async function attainAPI() {
  // Fetch APi
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const films = await response.json();

  films.forEach((film) => {
    const filmFrame = document.createElement("article");
    filmFrame.setAttribute("class", "frame");
    mainElement.appendChild(filmFrame);

    const poster = document.createElement("img");
    poster.src = film.image;
    filmFrame.appendChild(poster);

    // Create and append article to modal effect/ more info about film
    const filmInfo = document.createElement("article");
    filmInfo.setAttribute("id", "info");
    document.body.append(filmInfo);

    // Create section inside filmInfo to wrap all film content
    const filmContent = document.createElement("section");
    filmContent.setAttribute("id", "info-content");
    filmInfo.appendChild(filmContent);

    // hvorfor fungerer ikke denne ;((((( lagde plan b under, hentet movie_banner i et img;((
    //filmContent.style.backgroundImage = film.movie_banner;
    //console.log(film.movie_banner);
    //filmContent.style.backgroundColor = "orange";

    // Add banner img to filmContent
    const banner = document.createElement("img");
    banner.setAttribute("id", "banner");
    banner.src = film.movie_banner;
    filmContent.appendChild(banner);

    // Add content to filmInfo
    // Add film title
    const h1 = document.createElement("h1");
    h1.textContent = film.title;
    filmContent.appendChild(h1);

    // Add release date
    const releaseDate = document.createElement("p");
    releaseDate.textContent = film.release_date;
    filmContent.appendChild(releaseDate);

    // Add director
    const director = document.createElement("p");
    director.textContent = film.director;
    filmContent.appendChild(director);

    // Add film description
    const description = document.createElement("p");
    description.textContent = film.description;
    filmContent.appendChild(description);

    // Modal pop-up filmInfo
    filmFrame.addEventListener("click", function (event) {
      filmInfo.style.display = "block";
      filmFrame.style.display = "none";
      //document.querySelectorAll(".frame").style.display = "none"; -------------- disse fungerer utenfor funksjonen:(((
    });
    window.addEventListener("click", function (event) {
      if (event.target === filmInfo) {
        filmInfo.style.display = "none";
        filmFrame.style.display = "block";
        //document.querySelectorAll(".frame").style.display = "block";
      }
    });
  });
}
attainAPI();
