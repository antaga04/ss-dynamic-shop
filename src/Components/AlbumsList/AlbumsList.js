import "./newList.css";
import { AlbumCard } from "../AlbumCard/AlbumCard";
import { Filters } from "../Filters/Filters";

export const AlbumList = (list, names, number, indexes) => {
  let filteredList = [];
  if (names && names.length) {
    names.forEach((name) => {
      const album = list.find((album) => album.name === name);
      if (album) {
        filteredList.push(album);
      }
    });
  } else if (number) {
    filteredList = list.slice(0, number);
  } else if (indexes && indexes.length) {
    filteredList = indexes.map((index) => list[index]);
  } else {
    filteredList = list;
  }
  return `
    <article class="ss-noise">    
      <section id="album-list">
        <section class="album-list">
          ${filteredList.map((album) => AlbumCard(album)).join("")}
        </section>
      </section>
    </article>
  `;
};

{
  /* <h2>Aumenta el volumen y haz que el rock se escuche</h2> ${Filters()}*/
}

// <div>Yes bitch</div>
// ${indices.map((index) => AlbumCard(list[index])).join("")}
// ${albums.map((album) => AlbumCard(album).join("")}
// ${list.slice(0, number).map((album) => AlbumCard(album)).join("")}
/* 
${list.filter((album) => AlbumCard(albums.includes(album.name))).join("")}    
*/
