// import "./newCard.css";
import "../gpt.css";

export const AlbumCard = (album) => {
  return `
    <article id="${album.id}" class="album-card">
      <img class="sub" src=${album.cover} alt='${album.name}' />
      <img draggable="false"class="super" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1681747699/Rock%20Shop/tl_izzt88.webp" alt="cover">
      <h3>${album.name}</h3>
      <h5>${album.artist}</h5>
      <p>${album.price}€</p>
      <div class="buy-btn--container">
        <button id="add-to-cart" data-album-id="${album.id}">Add to Cart</button>
      </div>
    </article>
  `;
};
