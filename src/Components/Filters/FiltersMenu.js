import { Data } from "../../utils/albumsData";
import "./FiltersMenu.css";

export const FiltersMenu = () => {
  return `
    <section class="drop-filters">
    <div class="filter-content">
    <div class="filters-list">
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
    }
  });
  return genres;
};
