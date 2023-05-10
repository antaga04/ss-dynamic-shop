import { Data } from "../../utils/albumsData";
import "./FiltersBar.css";

export const FiltersBar = () => {
  return `
    <section class="filters-bar">
      <div id="add-btn" class="filter-btn">
        <button class="add-btn"><i class="fa-solid fa-plus"></i>Add filter</button>
        <button id="mobile-add-btn" class="add-btn"><i class="fa-solid fa-plus"></i></button>
      </div>

      <div>
        <select id="name-sort">
          <option value="">Sort by</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      <div id="search-btn" class="filter-btn">
        <button class="search-btn">Search</button>
        <button id="mobile-search-btn" class="search-btn"><i class="fa-solid fa-filter"></i></button>
      </div>

      <div id="clear-btn" class="filter-btn">
        <button class="clear-btn">Clear all</button>
        <button id="mobile-clear-btn" class="clear-btn">
          <i class="fa-solid fa-arrow-rotate-left"></i>
        </button>
      </div>
    </section>
  `;
};
