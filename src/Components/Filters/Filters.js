import { Data } from "../../utils/albumsData";
import "./Filters.css";

export const Filters = () => {
  return `
  <section id="filters">
    <div class="filters">
      <div class="filter-btn">
        <button data-action="filter">Filters</button><i class="fa-solid fa-filter"></i></i>
      </div>
      <div class="filter-btn">
        <button data-action="sort">Sort</button><i class="fa-solid fa-angle-down"></i>
      </div>
      <div class="filter-btn">
        <button data-action="reset">Reset</button><i class="fa fa-arrow-rotate-left"></i></i>
      </div>
    </div>

    <div id="filters-list" class="filters-list hidden">
      <div class="title-filters"><h2>Filters</h2><button><i class="fa-solid fa-x"></i></button></div>
      <h4>Genre/Style</h4>
      <ul class="genre-list">
        ${Genres(Data)
          .map(
            (genre, index) =>
              `<li><button class="checkBoxBtn"><input type="checkbox" name="${genre}" value="${index}">${genre}</button></li>`
          )
          .join("")}
      </ul>
      <h4>Price</h4>
      <div class="price-filter">
        <input type="text" placeholder="min">
        <input type="text" placeholder="max">
      </div>
      <h4>Decade</h4>
      <ul class="decade-list">
        <li><input type="checkbox" name="" value="">60s</li>
        <li><input type="checkbox" name="" value="">70s</li>
        <li><input type="checkbox" name="" value="">80s</li>
        <li><input type="checkbox" name="" value="">90s</li>
        <li><input type="checkbox" name="" value="">2000s</li>
      </ul>
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
  return genres;
};
