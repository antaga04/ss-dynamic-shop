import "./AlbumsList.css";
import { AlbumCard } from "../AlbumCard/AlbumCard";
import { Filters } from "../Filters/Filters";

export const AlbumList = (list) => {
  return `
  <article class="ss-noise">
      <section>
      <video id="ss-video--banner" autoplay loop muted>
        <source src="https://res.cloudinary.com/drsfru9lj/video/upload/v1680959766/Rock%20Shop/AC-DC-hero_wreg8q.mp4" type="video/mp4">
        Tu navegador no soporta videos en HTML5.
      </video>
      </section>
    
  <section id="album-list">
  
  ${Filters()}
    <section class="album-list">
      ${list.map((album) => AlbumCard(album)).join("")}
    </section>
  </section>
  </article>
  `;
};

{/* <h2>Aumenta el volumen y haz que el rock se escuche</h2> */}