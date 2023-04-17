import "./newList.css";
import { AlbumCard } from "../AlbumCard/AlbumCard";
import { Filters } from "../Filters/Filters";

export const AlbumList = (list) => {
  return `
  <article class="ss-noise">    
    <section id="album-list">
      <section class="album-list">
        ${list.map((album) => AlbumCard(album)).join("")}
      </section>
    </section>
  </article>
  `;
};

{/* <h2>Aumenta el volumen y haz que el rock se escuche</h2> ${Filters()}*/}