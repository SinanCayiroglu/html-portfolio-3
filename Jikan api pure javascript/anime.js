const queryParams = new URLSearchParams(window.location.search);
const animeId = queryParams.get("anime_id");
const fetchAnimeDetails = async (event) => {
  try {
    const anime = document.querySelector("#search");
    const response = await fetch("https://api.jikan.moe/v4/anime/" + animeId);
    const result = await response.json();
    console.log(result);
    displayAnimeDetails(result);
  } catch (err) {
    console.log(err);
  }
};
function displayAnimeDetails(result) {
  const animeCards = document.querySelector(".anime-lists");
  const anime = result.data;
  animeCards.innerHTML = `
                        <div class="anime-list">
                            <div class="image" id="image">
                                <img src="${anime.images.jpg.image_url}" alt="Anime Poster"/>
                                <p>Episodes: ${anime.type}</p>
                                <p>Episodes: ${anime.episodes}</p>
                                <p>Episodes: ${anime.status}</p>
                                <p>Episodes: ${anime.aired.string}</p>

                            </div>
                            <div class="details" id="details">
                                <h3>${anime.title}</h3>
                                <p>Type: ${anime.synopsis}</p>
                                <div class="trailer">
                                    <iframe src="${anime.trailer.embed_url}" allow="fullscreen" frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>
                `;
}
fetchAnimeDetails();

document.querySelector("#search-btn").addEventListener("click", function(event) {
  event.preventDefault();
  const searchValue = document.querySelector("#search").value.trim();
    if (searchValue !== "") {
      window.location.href = `index.html?search=${searchValue}`;
    }
});

document.querySelector("#randomAnimeButton").addEventListener("click", function() {
  window.location.href = "index.html?random=true";
});
document.querySelector("#airingAnime").addEventListener("click", function() {
  window.location.href = "index.html?airing=true";
});
document.querySelector("#upcomingAnime").addEventListener("click", function() {
  window.location.href = "index.html?upcoming=true";
});
document.querySelector("#favoriteAnime").addEventListener("click", function() {
  window.location.href = "index.html?favorite=true";
});