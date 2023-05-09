import './cdCard.css';

export const CdCard = (album) => {
  return ` 
    <button album-close-modal>Close</button>
    <article class="cd-page flex">
      <section class="cd-left--view">
        <img class="sub" src=${album.cover} alt='${album.name}'/>
      </section>
      <section  class="cd-right--view">
        <div>
          <h2 class="cd-title">${album.name}</h2>
          <h2 class="cd-artist">${album.artist}</h2>
          <dvi class="flex cd-info">
            <h4 cd-genre>${album.genre}</h4>
            <h4 cd-year>${album.year}</h4>
          </dvi>
        </div>

        <div>
          <h3>Band members</h3>
          <ul class="flex cd-members">
            ${album.members
              .map((member) => {
                return `<li>${member}</li>`;
              })
              .join('')}
          </ul>
        </div>

        <div>
          <h3>Songs list</h3>
          <ul class="cd-songs">
            ${album.songs
              .map((song, index) => {
                return `<li>${index+1}. ${song}</li>`;
              })
              .join('')}
          </ul>
        </div>

        <p cd-price>${album.price}€</p>
        <div class="buy-btn--container">
          <button id="add-to-cart" data-album-id="${album.id}">Add to Cart</button>
        </div>
      </section>
    </article>
  `;
};
