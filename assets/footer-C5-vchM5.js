import{a as l}from"./vendor-DXMRcI7q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const M=document.querySelectorAll(".header-menu-link"),d=document.querySelector(".theme-toggle"),g="cinemaplus-theme";N();Z();function N(){const e=u(window.location.pathname);M.forEach(t=>{const a=u(new URL(t.href,window.location.origin).pathname);t.classList.toggle("header-menu-link--active",a===e)})}function u(e){return!e||e==="/"?"/index.html":e}function Z(){const e=localStorage.getItem(g)||"dark";h(e),d&&(d.checked=e==="light",d.addEventListener("change",()=>{const t=d.checked?"light":"dark";h(t)}))}function h(e){const t=document.documentElement;e==="light"?t.setAttribute("data-theme","light"):t.removeAttribute("data-theme"),localStorage.setItem(g,e)}async function J(){const a="https://api.themoviedb.org/3"+"/trending/movie/day",o={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY"};return(await l.get(a,{headers:o})).data}//!================================================
async function W(e=1){const o="https://api.themoviedb.org/3"+"/trending/movie/week",i={page:e},n={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY"};return(await l.get(o,{params:i,headers:n})).data}//!================================================
async function A(){const a="https://api.themoviedb.org/3"+"/movie/upcoming",o={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY"};return(await l.get(a,{headers:o})).data}//!================================================
async function R(e,t){const i="https://api.themoviedb.org/3"+"/search/movie",n={query:e,page:t},r={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY"};return(await l.get(i,{headers:r,params:n})).data}//!================================================
async function L(e){const t="https://api.themoviedb.org/3",a=`/movie/${e}`,o=t+a,i={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg3ODc4ZGU4ZGRiNTM0M2EwZTBhZmZkZTIzMDQzYSIsIm5iZiI6MTc2NTIwNzE4My45MjksInN1YiI6IjY5MzZlYzhmN2JiOWFjYmIzM2I3MThkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcbMvEsc5Jx_W66tdGXRZHKJ8Gc30IuZZd0_Ov_tHhY"};return(await l.get(o,{headers:i})).data}//!================================================
async function U(e){if(!Array.isArray(e)||!e.length)return[];const t=e.map(L);return await Promise.all(t)}const s={hero:document.querySelector(".js-hero"),weeklyList:document.querySelector(".js-weekly-list"),upcomingCard:document.querySelector(".js-upcoming-card"),searchMovieForm:document.querySelector(".js-movie-list-form"),movieList:document.querySelector(".js-movie-list"),movieListPagination:document.querySelector(".js-movie-list-pagination"),modalBackdrop:document.querySelector(".backdrop"),modalContent:document.querySelector(".js-modal-content"),modalClose:document.querySelector(".js-modal-close"),userList:document.querySelector(".js-user-list-grid"),userListFilter:document.querySelector(".js-user-list-filter"),userListClear:document.querySelector(".js-user-list-clear"),userListEmpty:document.querySelector(".js-user-list-empty"),userListEmptyLink:document.querySelector(".user-list-empty-link")};document.addEventListener("DOMContentLoaded",async e=>{const t=await J();console.log(t);const a=t.results[0];a&&j(a)});function z(e){return` <img src="https://image.tmdb.org/t/p/original/${e.backdrop_path}" alt="" class="hero-bg">
  <h1 class="hero-title">${e.title}</h1>
  <p class="hero-text">
    ${e.overview}
  </p>
  <a href="" class="hero-link">Watch Trailer</a>
  <a href="" class="hero-link">More Details</a>
  `}function j(e){const t=z(e);s.hero.innerHTML=t}const T=[{id:28,name:"Action"},{id:12,name:"Abenteuer"},{id:16,name:"Animation"},{id:35,name:"Komödie"},{id:80,name:"Krimi"},{id:99,name:"Dokumentarfilm"},{id:18,name:"Drama"},{id:10751,name:"Familie"},{id:14,name:"Fantasy"},{id:36,name:"Historie"},{id:27,name:"Horror"},{id:10402,name:"Musik"},{id:9648,name:"Mystery"},{id:10749,name:"Liebesfilm"},{id:878,name:"Science Fiction"},{id:10770,name:"TV-Film"},{id:53,name:"Thriller"},{id:10752,name:"Kriegsfilm"},{id:37,name:"Western"}];function k(e=[]){var o;if(!Array.isArray(e)||e.length===0)return"Unknown";const a=typeof e[0]=="object"&&((o=e[0])==null?void 0:o.name)?e.map(i=>i.name).filter(Boolean):e.map(i=>{var n;return(n=T.find(r=>r.id===i))==null?void 0:n.name}).filter(Boolean);return a.length?a.join(", "):"Unknown"}const b="USER_MOVIE_LIST_KEY";function Y(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function w(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}const E="library:update";function c(){const e=w(b);return Array.isArray(e)?e.map(Number).filter(t=>!Number.isNaN(t)):[]}function m(e){const t=[...new Set(e.map(Number).filter(a=>!Number.isNaN(a)))];return Y(b,t),window.dispatchEvent(new CustomEvent(E,{detail:{ids:t}})),t}function G(e){const t=Number(e);if(Number.isNaN(t))return{ids:c(),added:!1};const a=c(),o=a.includes(t),i=o?a.filter(r=>r!==t):[...a,t];return{ids:m(i),added:!o}}function D(e){const t=Number(e);if(Number.isNaN(t))return c();const a=c();return a.includes(t)?m(a.filter(o=>o!==t)):a}function C(){m([])}//!================================================
function O(e){const t=e.genre_ids||e.genres||[],a=k(t),o=e.release_date?e.release_date.slice(0,4):"N/A",i=e.vote_average?Number(e.vote_average).toFixed(1):"—";return` <li class="weekly-item" data-id="${e.id}">
      <div href="" class="weekly-card" data-rating="${i}">
        <img src="https://image.tmdb.org/t/p/original/${e.backdrop_path}" alt="" class="weekly-poster" />
        <div>
        <h4>${e.title}</h4>
          <p><span>${a}</span> | <span>${o}</span></p>
        </div>
      </div>
    </li>`}function x(e){return e.map(O).join("")}//!================================================
function q(e){return`<div class="modal-media" >
    <img
      src="https://image.tmdb.org/t/p/original/${e.backdrop_path}"
      alt="${e.title} poster"
      class="modal-poster"
      loading="lazy"
    />
  </div>
  <div class="modal-body">
    <h3 class="modal-title">${e.title}</h3>
    <div class="modal-meta">
      <div class="modal-meta-row">
        <p class="modal-label">Release Date</p>
        <p class="modal-value">${e.release_date}</p>
      </div>
      <div class="modal-meta-row">
        <p class="modal-label">Popularity</p>
        <p class="modal-value">${e.popularity}</p>
      </div>
      <div class="modal-meta-row">
        <p class="modal-label">Vote / Votes</p>
        <p class="modal-value">${e.vote_average} / ${e.vote_count}</p>
      </div>
      <div class="modal-meta-row">
        <p class="modal-label">Genre</p>
        <p class="modal-value">${e.genres.map(t=>t.name).join(", ")}</p>
      </div>
    </div>
    <p class="modal-section-label">About</p>
    <p class="modal-description">${e.overview}</p>
    <div class="modal-actions">
      <button class="btn modal-action" type="button" data-id="${e.id}">Add to my library</button>
    </div>
  </div>`}//!================================================
function S(e){var n;const t=(n=s.modalContent)==null?void 0:n.querySelector(".modal-action");if(!t)return;const a=Number(e),o=c();if(Number.isNaN(a)){delete t.dataset.id,t.textContent="Add to my library";return}t.dataset.id=a;const i=o.includes(a);t.textContent=i?"Remove from my library":"Add to my library"}function P(){s.modalBackdrop.classList.remove("hidden")}function v(){s.modalBackdrop.classList.add("hidden")}//!================================================
var y;(y=s.modalBackdrop)==null||y.addEventListener("click",e=>{e.target===s.modalBackdrop&&v()});var f;(f=s.modalClose)==null||f.addEventListener("click",()=>{v()});//!================================================
var I;(I=s.modalContent)==null||I.addEventListener("click",e=>{const t=e.target.closest(".modal-action");if(!t)return;e.preventDefault();const a=t.dataset.id;a&&(G(a),S(a))});const p=document.querySelector(".js-footer-year");p&&(p.textContent=new Date().getFullYear());export{E as L,c as a,U as b,C as c,k as d,D as e,L as f,T as g,W as h,x as i,A as j,R as k,q as m,s as r,P as s,S as u};
//# sourceMappingURL=footer-C5-vchM5.js.map
