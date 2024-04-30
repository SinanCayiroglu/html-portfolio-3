const urlParams = new URLSearchParams(window.location.search);

const getRandomAnime = async () => {
  try {
    const response = await fetch("https://api.jikan.moe/v4/random/anime");
    const result = await response.json();
     generateRandomAnime(result);
  } catch (err) {
    console.log(err);
  }
}
  function generateRandomAnime(result) {
    const animeCards = document.querySelector(".anime-cards");
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
  const randomAnimeButton = document.getElementById("randomAnimeButton")
randomAnimeButton.addEventListener("click",getRandomAnime)
;

const searchAnime = async (event)=>{
    try{
        const anime = urlParams.get("search")
        const response = await fetch("https://api.jikan.moe/v4/anime?q="+anime)
        const result = await response.json()
        console.log(result)
        generateUpcomingAnime(result)
    }catch(err){
        console.log(err)
    }
}

const searchAnimeBtn = document.getElementById("search-form")
searchAnimeBtn.addEventListener("submit",searchAnime)

   

const popularAnime = async ()=>{
    try{
        const response = await fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity")
        const result = await response.json()
        generatePopularAnime(result)
    }catch(err){
        console.log(err)
    }
}
function generatePopularAnime(result){
    const animeCards = document.querySelector(".anime-cards")
    const animes = result.data
    animeCards.innerHTML = animes.map(anime=>{
        return `
        <div class="anime-card">
            <div class="image" id="image">
            <a href="./anime.html?anime_id=${anime.mal_id}">
                <img src="${anime.images.jpg.image_url}" alt="">
                </a>
            </div>
        </div>`
    })
}
popularAnime()

const upcomingAnime = async ()=>{
    try{
        const response = await fetch("https://api.jikan.moe/v4/top/anime?filter=upcoming")
        const result = await response.json()
        generateUpcomingAnime(result)
    }catch(err){
        console.log(err)
    }
}
function generateUpcomingAnime(result){
    const animeCards = document.querySelector(".anime-cards")
    const animes = result.data
    animeCards.innerHTML = animes.map(anime=>{
        return `
        <div class="anime-card">
            <div class="image" id="image">
            <a href="./anime.html?anime_id=${anime.mal_id}">
                <img src="${anime.images.jpg.image_url}" alt="">
                </a>
            </div>
        </div>`
    })
}
const upcomingAnimeButton = document.getElementById("upcomingAnime")
upcomingAnimeButton.addEventListener("click",upcomingAnime)

const airingAnime = async ()=>{
    try{
        const response = await fetch("https://api.jikan.moe/v4/top/anime?filter=airing")
        const result = await response.json()
        generateUpcomingAnime(result)
    }catch(err){
        console.log(err)
    }
}

const airingAnimeButton = document.getElementById("airingAnime")
airingAnimeButton.addEventListener("click",airingAnime)

const favoriteAnime = async ()=>{
    try{
        const response = await fetch("https://api.jikan.moe/v4/top/anime?filter=favorite")
        const result = await response.json()
        generateUpcomingAnime(result)
    }catch(err){
        console.log(err)
    }
}

const favoriteAnimeButton = document.getElementById("favoriteAnime")
favoriteAnimeButton.addEventListener("click",favoriteAnime)

const randomParam = urlParams.get('random');
if (randomParam === 'true') {
    getRandomAnime(); // Call getRandomAnime function if randomParam is true
}

const searchParam = urlParams.get('search');
if (searchParam && searchParam.trim() !== "") {
    searchAnime(); // Call searchAnime function if searchParam is not null, undefined, or empty
}

const airingParam = urlParams.get('airing');
if (airingParam === 'true') {
    airingAnime(); // Call getRandomAnime function if randomParam is true
}
const upcomingParam = urlParams.get('upcoming');
if (upcomingParam === 'true') {
    upcomingAnime(); // Call getRandomAnime function if randomParam is true
}
const favoriteParam = urlParams.get('favorite');
if (favoriteParam === 'true') {
    favoriteAnime(); // Call getRandomAnime function if randomParam is true
}

const fetchAnimeDetails = async (event) => {
  try {
    const anime = document.querySelector("#search");
    const response = await fetch("https://api.jikan.moe/v4/anime/" + animeId);
    const result = await response.json();
    displayAnimeDetails(result);
  } catch (err) {
    console.log(err);
  }
};
