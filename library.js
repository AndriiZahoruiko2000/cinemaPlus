import{r as n,g as f,c as v,L as g,a as y,b as L,d as h,e as b,f as C,m as w,u as E,s as M}from"./assets/footer-C5-vchM5.js";import"./assets/vendor-DXMRcI7q.js";const i={movies:[],filter:"all"};document.addEventListener("DOMContentLoaded",()=>{n.userList&&$()});function $(){x(),T(),c()}function x(){if(!n.userListFilter)return;const e=["all",...f.map(t=>t.id)];n.userListFilter.innerHTML=e.map(t=>{if(t==="all")return'<option value="all">All genres</option>';const r=f.find(a=>a.id===t);return`<option value="${t}">${(r==null?void 0:r.name)??"Unknown"}</option>`}).join("")}function T(){var e,t,r,a;(e=n.userListFilter)==null||e.addEventListener("change",s=>{i.filter=s.target.value,d()}),(t=n.userListClear)==null||t.addEventListener("click",()=>{v()}),(r=n.userListEmptyLink)==null||r.addEventListener("click",s=>{const o=s.currentTarget.dataset.action;o==="browse"||!o||(s.preventDefault(),o==="reset-filter"&&j(),o==="retry"&&c())}),(a=n.userList)==null||a.addEventListener("click",k),window.addEventListener(g,c)}async function c(){if(!n.userList)return;const e=y();if(B(e.length>0),!e.length){i.movies=[],n.userList.innerHTML="",l(!0,"empty");return}try{const t=await L(e);i.movies=t,d()}catch(t){console.error("Failed to load saved movies",t),i.movies=[],n.userList.innerHTML="",l(!0,"error")}}function d(){if(!n.userList)return;if(!i.movies.length){l(!0,"empty");return}const e=i.filter,t=e==="all"?i.movies:i.movies.filter(a=>F(a,e));n.userList.innerHTML=t.map(_).join("");const r=t.length?null:"filter";l(!t.length,r)}function F(e,t){const r=Number(t);return Number.isNaN(r)?!0:(e.genres||e.genre_ids||[]).some(s=>typeof s=="number"?s===r:s.id===r)}function _(e){const t=e.release_date?e.release_date.slice(0,4):"N/A",r=e.genres?e.genres.map(m=>m.name).join(", "):h(e.genre_ids),a=S(e.overview),s=e.vote_average?Number(e.vote_average).toFixed(1):"—",o=e.vote_count??"0",u=e.poster_path||e.backdrop_path,p=u?`https://image.tmdb.org/t/p/w500/${u}`:"https://placehold.co/300x450/0f172a/ffffff?text=No+Poster";return`<li class="user-card" data-id="${e.id}">
      <div class="user-card-media">
        <img src="${p}" alt="${e.title} poster" class="user-card-poster" loading="lazy" />
      </div>
      <div class="user-card-body">
        <div class="user-card-header">
          <h3 class="user-card-title">${e.title}</h3>
          <span class="user-card-year">${t}</span>
        </div>
        <p class="user-card-genres">${r}</p>
        <p class="user-card-overview">${a}</p>
        <div class="user-card-stats">
          <span>⭐ ${s}</span>
          <span>Votes ${o}</span>
        </div>
        <div class="user-card-actions">
          <button class="btn btn--ghost js-library-details" type="button" data-id="${e.id}">
            Details
          </button>
          <button class="btn user-card-remove js-library-remove" type="button" data-id="${e.id}">
            Remove
          </button>
        </div>
      </div>
    </li>`}function k(e){const t=e.target.closest(".js-library-remove");if(t){const a=t.dataset.id;b(a);return}const r=e.target.closest(".js-library-details");r&&N(r.dataset.id)}async function N(e){if(e&&n.modalContent)try{const t=await C(e),r=w(t);n.modalContent.innerHTML=r,E(e),M()}catch(t){console.error("Failed to open movie modal",t)}}function l(e,t="empty"){if(!n.userListEmpty||(n.userListEmpty.hidden=!e,!e))return;const r=n.userListEmpty.querySelector(".user-list-empty-title"),a=n.userListEmpty.querySelector(".user-list-empty-text"),s=n.userListEmptyLink;t==="filter"?(r.textContent="No movies match this genre",a.textContent="Try a different filter to explore the rest of your saved movies.",s&&(s.textContent="Reset filter",s.href="#",s.dataset.action="reset-filter")):t==="error"?(r.textContent="Something went wrong",a.textContent="Please try again later.",s&&(s.textContent="Try again",s.href="#",s.dataset.action="retry")):(r.textContent="Library is empty",a.textContent="Start adding movies from the catalog to see them listed here.",s&&(s.textContent="Browse catalog",s.href="/catalog.html",s.dataset.action="browse"))}function B(e){n.userListClear&&(n.userListClear.disabled=!e)}function j(){n.userListFilter&&(n.userListFilter.value="all",i.filter="all",d())}function S(e=""){return e?e.length>220?`${e.slice(0,217)}...`:e:"No synopsis available yet."}
//# sourceMappingURL=library.js.map
