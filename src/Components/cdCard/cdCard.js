import './cdCard.css';

export const CdCard = (album) => {
  return ` 
    <button album-close-modal>Close</button>
    <article class="cd-page flex">
      <section class="cd-left--view">
        <img class="sub" src=${album.cover} alt='${album.name}' />
      </section>
      <section  class="cd-right--view">
        <h2>${album.name}</h2>
        <h2 style="color: red;">${album.artist}</h2>
        <dvi class="flex">
          <h4>${album.genre}</h4>
          <h4>${album.year}</h4>
        </dvi>
        <ul class="flex">
          ${album.members
            .map((member) => {
              return `<li>${member}</li>`;
            })
            .join('')}
        </ul>
        <ul class="" style="display: flex; flex-direction: column;">
          ${album.songs
            .map((song, index) => {
              return `<li>${index+1}. ${song}</li>`;
            })
            .join('')}
        </ul>
        <p>${album.price}€</p>
        <div class="buy-btn--container">
          <button>Add to Cart</button>
        </div>
      </section>
    </article>
  `;
};
