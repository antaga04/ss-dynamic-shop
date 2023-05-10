import './style.css';
import { Home } from './src/pages/home/home';
import { Shop } from './src/pages/shop/shop';
import { linkPage } from './src/utils/linkPage';
import { About } from './src/pages/about/about';
import { TopSales } from './src/pages/topSales/topSales';
import { Cart } from './src/pages/cart/cart';
import { Data } from './src/utils/albumsData';
import { AlbumList, notFound } from './src/Components/AlbumsList/AlbumsList';
import { renderCdPage } from './src/utils/listeners';
import { isEmpty } from './src/utils/functions';

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
  if (isEmpty(filteredAlbums)) {
    oldMain.innerHTML = notFound();
  } else {
    oldMain.innerHTML = AlbumList(filteredAlbums);
  }
};

function sort(albums, order) {
  const newData = order === 'desc'
    ? albums.slice().sort((a, b) => b.name.localeCompare(a.name))
    : albums.slice().sort((a, b) => a.name.localeCompare(b.name));

  return newData;
}


app.addEventListener('change', (ev) => {
  if (ev.target.matches('#name-sort')) {
    const oldMain = document.querySelector('main');
    oldMain.innerHTML = '';

    if (ev.target.value === '-') {
      oldMain.innerHTML = AlbumList(Data);
    } else {
      const sortedAlbums = sort(Data, ev.target.value);
      oldMain.innerHTML = ev.target.value != 'asc' && ev.target.value != 'desc'
        ? AlbumList(Data)
        : AlbumList(sortedAlbums);
    }
    
  }
});

renderCdPage(app, Data);
