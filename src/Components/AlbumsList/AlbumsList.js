// import "./newList.css";
import '../gpt.css';
import { AlbumCard } from '../AlbumCard/AlbumCard';

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
    <dialog album-modal class="dialog-content">
    </dialog>
    <article class="ss-noise">    
      <section id="album-list">
        <section class="album-list flex">
          ${filteredList.map((album) => AlbumCard(album)).join('')}
        </section>
      </section>
    </article>
  `;
};
