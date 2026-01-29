import{h as i,i as c,r as t,f as p,m as l,u as r,s as u,j as m,d}from"./assets/footer-C5-vchM5.js";import"./assets/vendor-DXMRcI7q.js";//!================================================
document.addEventListener("DOMContentLoaded",async e=>{const a=await i(),s=c(a.results.slice(0,3));t.weeklyList.innerHTML=s});//!================================================
t.weeklyList.addEventListener("click",async e=>{if(e.target===t.weeklyList)return;const s=e.target.closest("li").dataset.id,n=await p(s),o=l(n);t.modalContent.innerHTML=o,r(s),u()});document.addEventListener("DOMContentLoaded",async e=>{const a=await m(),s=g(a.results[0]);t.upcomingCard.innerHTML=s});function g(e){return`<img src="https://image.tmdb.org/t/p/original/${e.backdrop_path}" alt="" class="upcoming-poster" />
    <h3 class="upcoming-title">${e.title}</h3>
    <div class="upcoming-meta">
      <div class="upcoming-meta-row">
        <p class="upcoming-label">Release Date</p>
        <p class="upcoming-value">${e.release_date}</p>
      </div>
      <div class="upcoming-meta-row">
        <p class="upcoming-label">Popularity</p>
        <p class="upcoming-value">${e.popularity}</p>
      </div>
      <div class="upcoming-meta-row">
        <p class="upcoming-label">Vote / Votes</p>
        <p class="upcoming-value">${e.vote_average} / ${e.vote_count}</p>
      </div>
      <div class="upcoming-meta-row">
        <p class="upcoming-label">Genre</p>
        <p class="upcoming-value">${d(e.genre_ids)}</p>
      </div>
    </div>
    <p class="upcoming-description">About</p>
    <p class="upcoming-subtext">${e.overview}</p>
    <button class="upcoming-btn">Add to my library</button>`}
//# sourceMappingURL=index.js.map
