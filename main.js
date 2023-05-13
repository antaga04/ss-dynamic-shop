import './style.css';
import { Home } from './src/pages/home/home';
import { Shop } from './src/pages/shop/shop';
import { linkPage } from './src/utils/linkPage';
import { About } from './src/pages/about/about';
import { TopSales } from './src/pages/topSales/topSales';
import { Cart } from './src/pages/cart/cart';
import { Data } from './src/utils/albumsData';
import { renderCdPage, renderSearchAlbums } from './src/utils/listeners';
import { filterAlbums } from './src/utils/functions';

const app = document.querySelector('#app');

// Pages
Home();
linkPage('#homeLink', Home);
linkPage('#shopLink', Shop);
linkPage('#topSalesLink', TopSales);
linkPage('#aboutLink', About);
linkPage('#cartLink', Cart);

// Event Listeners
renderSearchAlbums(app, Data);
renderCdPage(app, Data);
