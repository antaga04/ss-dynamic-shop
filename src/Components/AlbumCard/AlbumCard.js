import "./newCard.css";

export const AlbumCard = (album) => {
  return `
    <article class="album-card">
      <img src=${album.cover} alt='${album.name}' />
      <img class="super" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1681747699/Rock%20Shop/tl_izzt88.webp" alt="cover">
      <h3>${album.name}</h3>
      <h5>${album.artist}</h5>
    </article>
  `;
};
