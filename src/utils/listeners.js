import { AlbumList, notFound } from '../Components/AlbumsList/AlbumsList';
import { CdCard } from '../Components/cdCard/cdCard';
import * as functions from './functions';

export const handleDrop = (target, match, drop) => {
  target.addEventListener('click', (event) => {
    if (event.target.closest(match)) {
      const dropFilters = document.querySelector(drop);
      dropFilters.classList.toggle('menu-mode');
    }
  });
};

export const handleDialog = (target, match, drop, close) => {
  target.addEventListener('click', (ev) => {
    if (ev.target.closest(match)) {
      const modal = document.querySelector('.drop-filters');
      const header = document.getElementById('header');

      modal.style.height = window.innerHeight - header.offsetHeight - 32 + 'px';
      modal.style.top = header.offsetHeight + 'px';
      modal.show();
    }
    if (ev.target.closest(close)) {
      functions.removeModal();
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

    // console.log(event.target)
    if (event.target.closest(search)) {
      const filteredData = functions.getFilteredData(data, selectedBoxes, minPrice, maxPrice);

      // functions.removeFilters(drop, content);
      functions.removeModal();
      // pintamos la lista con los datos filtrados
      if (!functions.isEmpty(filteredData)) {
        oldMain.innerHTML = '';
        oldMain.innerHTML = AlbumList(filteredData);
      } else {
        oldMain.innerHTML = notFound();
      }
    }

    if (event.target.closest(clear)) {
      oldMain.innerHTML = '';
      oldMain.innerHTML = AlbumList(data);
      // quitar los checked filters de la lista checkboxes
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
