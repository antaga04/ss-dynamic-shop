import { Data } from "../../utils/albumsData";
import "./newFilters.css";

export const Filters2 = () => {
  return `
    <section class="filters-wrapper">
      
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
