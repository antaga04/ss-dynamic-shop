import { AlbumList } from '../Components/AlbumsList/AlbumsList';
import { CdCard } from '../Components/cdCard/cdCard';
import * as functions from './functions';

export const handleDrop = (target, match, drop, content) => {
  target.addEventListener('click', (event) => {
    if (event.target.matches(match)) {
      const dropFilters = document.querySelector(drop);
      const filterContent = document.querySelector(content);
      dropFilters.classList.toggle('menu-mode');
      filterContent.classList.toggle('menu-mode');
    }
  });
};

export const handleFilters = (target, search, clear, drop, content, data) => {
  target.addEventListener('click', (event) => {
    const oldMain = document.querySelector('main');
    const minPrice = document.querySelector('#min-input');
    const maxPrice = document.querySelector('#max-input');
    /* seleccionar los checkbox de filters, genre y year */
    const checkboxes = document.querySelectorAll('.checkBoxBtn input[type="checkbox"]:checked');
    const selectedBoxes = Array.from(checkboxes).map((checkbox) => checkbox.id);

    if (event.target.matches(search)) {
      const filteredData = functions.getFilteredData(data, selectedBoxes, minPrice, maxPrice);

      functions.removeFilters(drop, content);
      /* pintamos la lista con los datos filtrados */
      if (!functions.isEmpty(filteredData)) {
        oldMain.innerHTML = '';
        oldMain.innerHTML = AlbumList(filteredData);
      } else {
        oldMain.innerHTML = `
          <article class="ss-noise">    
            <section id="album-list">
              <section class="album-list flex">
                No albums found...
              </section>
            </section>
          </article>`;
      }
    }

    if (event.target.matches(clear)) {
      functions.removeFilters(drop, content);
      oldMain.innerHTML = '';
      oldMain.innerHTML = AlbumList(data);
      /* quitar los checked filters de la lista checkboxes */
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  });
};

export const renderCdPage = (target, data) => {
  const albumMap = new Map(data.map((album) => [album.id, album]));
  target.addEventListener('click', (ev) => {
    if (!ev.target.matches('#add-tocart')) {
      const match = ev.target.closest('[id]');
      let dialog = document.querySelector('[album-modal]');

      if (match) {
        const album = albumMap.get(match.id);
        // console.log(album)
        if (album) {
          dialog.innerHTML = CdCard(album);
          dialog.showModal();
          functions.exitDialog(dialog);
        }
        if (ev.target.matches('[album-close-modal]')) {
          const modal = document.querySelector('[album-modal]');
          modal.close();
          functions.exitDialog(dialog);
        }
      }
    }
  });
};

export const addToCart = (target, data, cart) => {
  target.addEventListener('click', (ev) => {
    if (ev.target.matches('#add-to-cart')) {
      const albumId = ev.target.dataset.albumId;
      console.log(albumId);
      const album = data.find((album) => album.id === albumId);
      console.log(album);
      cart.addProduct(album);
      localStorage.setItem('cart', JSON.stringify(cart.products));
      console.log(cart);
      // return cart;
    }
  });
};
