import { Data } from '../../utils/albumsData';
import { handleDialog, handleDrop, handleFilters } from '../../utils/listeners';
import { FiltersBar } from '../Filters/FiltersBar';
import { FiltersMenu } from '../Filters/FiltersMenu';
import { Menu } from '../dropMenu/menu';
import './header.css';

const app = document.querySelector('#app');

export const Header = () => {
  return `
    ${Menu()}
    ${FiltersMenu()}

    <header id="header">
      <section class="header-container">
        <article class="header-side left-side">
          <div class="logo">
            <a href="/" onclick="location.reload()">
              <img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1681568524/Rock%20Shop/solid-sounds-logo_vwl7d8.png" alt="SolidSounds Logo">
              <h1>Solid Sounds</h1>
            </a>
          </div>

          <article class="menu-container">
            <div class="menu-list">
              <button class="menu-btn">Menu<span>▾</span></button>
              <ul class="flex nav">
                <li><a id="homeLink" href="#home">Home</a></li>
                <li><a id="shopLink" href="#shop">Shop</a></li>
                <li><a id="topSalesLink" href="#topsales">Top-Sales</a></li>
                <li><a id="aboutLink" href="#about">About</a></li>
              </ul>
            </div>
          </article>
        </article>

        <article class="header-side">
          <div class="search-bar">
            <input type="text" class="ss-flex" id="searchInput" placeholder="Search..." />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <a id="cartLink" href="#cart"><i class="fa-solid fa-cart-shopping"></i><span number-of-cds>[0]</span></a>
        </article>
      </section>

      ${FiltersBar()}
    </header>
  `;
};

handleDrop(app, '.menu-btn', '.drop-menu');
handleDialog(app, '.add-btn', '#close-filters-btn');
handleFilters(app, '.search-btn', '.clear-btn', Data);
