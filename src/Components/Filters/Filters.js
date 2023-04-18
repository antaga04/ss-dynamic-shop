import { Data } from "../../utils/albumsData";
import "./Filters.css";

export const Filters = () => {
  return `
  <section class="filters-wrapper">
    <div class="filters">
      <div class="filter-btn">
        <button data-action="filter">Filters</button><i class="fa-solid fa-filter"></i></i>
      </div>
      <div class="filter-btn">
        <button data-action="sort">Sort</button><i class="fa-solid fa-angle-down"></i>
      </div>
    </div>

    <div id="filters-list" class="filters-list">
      <div class="title-filters"><h2>Filters</h2></div>
      <h4>Genre/Style</h4>
      <ul class="genre-list">
        ${Genres(Data)
          .map(
            (genre, index) =>
              `<li>
                <button class="checkBoxBtn">
                  <input type="checkbox" id="${genre}" value="${index}">
                  <label for="${genre}">${genre}</label>
                </button>
                </li>`
          )
          .join("")}
      </ul>
      <h4>Price</h4>
      <div class="price-filter">
        <input type="text" placeholder="min">
        <span>-</span>
        <input type="text" placeholder="max">
      </div>
      <h4>Years</h4>
      <ul class="decade-list">
        <li><button class="checkBoxBtn">
          <input type="checkbox" id="60s"><label for="60s">60s</label>
        </button></li>
        <li><button class="checkBoxBtn">
          <input type="checkbox" id="70s"><label for="70s">70s</label>
        </button></li>
        <li><button class="checkBoxBtn">
          <input type="checkbox" id="80s"><label for="80s">80s</label>
        </button></li>
        <li><button class="checkBoxBtn">
          <input type="checkbox" id="90s"><label for="90s">90s
        </button></li>
        <li><button class="checkBoxBtn">
          <input type="checkbox" id="2000s"><label for="2000s">2000s</label>
        </button></li>
      </ul>
    </div>
    <div class="filters">
      <div class="filter-btn">
          <button data-action="reset">Filter</button><i class="fa-solid fa-play"></i>
      </div>
      <div class="filter-btn">
          <button data-action="reset">Reset</button><i class="fa fa-arrow-rotate-left"></i>
      </div>
    </div>
  </section>
  `;
};

const Genres = (Data) => {
  let genres = [];
  Data.forEach((album) => {
    if (!genres.includes(album.genre)) {
      genres.push(album.genre);
      // console.log(album.genre);
    }
  });
  // console.log(genres);
  return genres.sort();
};
