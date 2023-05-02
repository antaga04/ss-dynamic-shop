import "./topSales.css";
import { Footer } from "../../Components/footer/footer";
import { Header } from "../../Components/header/header";
import { AlbumList } from "../../Components/AlbumsList/AlbumsList";
import { Data } from "../../utils/albumsData";

export const TopSales = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const main = document.createElement("main");
  app.innerHTML = Header();

  main.innerHTML = `
    <div class="popular-main">
      <h1>Top Sales</h1>
      <div class="slogan">
        Unleash your inner rockstar with our electrifying collection of CDs!
      </div>
    </div>
  `;

  main.innerHTML += AlbumList(Data, 0, 0, [33, 54, 67, 12, 8, 41, 13, 4, 19]);
  app.appendChild(main);

  const albumList = document.querySelector('.album-list');
  albumList.style.padding = '0 1rem 2rem 1rem';

  const outerAlbumList = document.querySelector('#album-list');
  outerAlbumList.style.padding = '0';

  app.innerHTML += Footer();
};
