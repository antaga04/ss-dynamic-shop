import { Data } from "../../utils/albumsData";
import "./FiltersBar.css";

export const FiltersBar = () => {
  return `
    <section class="filters-bar">
      <div class="filter-btn">
        <button class="add-btn"><i class="fa-solid fa-plus"></i>Add filter</button>
      </div>
      <div>
        <select id="name-sort">
          <option value="">Sort by</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div class="filter-btn"><button class="search-btn">Search</button></div>
      <div class="filter-btn"><button class="clear-btn">Clear all</button></div>
    </section>
  `;
};
