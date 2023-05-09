import './style.css';
import { Home } from './src/pages/home/home';
import { Shop } from './src/pages/shop/shop';
import { linkPage } from './src/utils/linkPage';
import { About } from './src/pages/about/about';
import { TopSales } from './src/pages/topSales/topSales';
import { Cart } from './src/pages/cart/cart';
import { Data } from './src/utils/albumsData';
import { AlbumList } from './src/Components/AlbumsList/AlbumsList';
import { renderCdPage } from './src/utils/listeners';

Home();
linkPage('#homeLink', Home);
linkPage('#shopLink', Shop);
linkPage('#topSalesLink', TopSales);
linkPage('#aboutLink', About);
linkPage('#cartLink', Cart);

const app = document.querySelector('#app');

app.addEventListener('change', (ev) => {
  if (ev.target.matches('input[id="searchInput"]')) {
    filterAlbums(Data, ev.target.value);
    const filtersBar = document.querySelector('.filters-bar');
    filtersBar.style.display = 'flex';
    // console.log(ev.target);
  }
});

const filterAlbums = (list, keyword) => {
  const filteredAlbums = list.filter(
    (item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.artist.toLowerCase().includes(keyword.toLowerCase())
  );
  const oldMain = document.querySelector('main');
  oldMain.innerHTML = '';
  oldMain.innerHTML = AlbumList(filteredAlbums);
};

app.addEventListener('click', (ev) => {
  if (ev.target.matches('[data-open-modal]')) {
    const modal = document.querySelector('[data-modal]');
    console.log(ev.target);
    modal.showModal();
  }
  if (ev.target.matches('[data-close-modal]')) {
    const modal = document.querySelector('[data-modal]');
    modal.close();
  }
});

// app.addEventListener('click', (ev) => {
//   if (ev.target.matches('[album-open-modal]')) {
//     const modal = document.querySelector('[album-modal]');
//     console.log(ev.target);
//     modal.showModal();
//   }
//   if (ev.target.matches('[album-close-modal]')) {
//     const modal = document.querySelector('[album-modal]');
//     modal.close();
//   }
// });

renderCdPage(app, Data);
