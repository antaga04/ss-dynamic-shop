import "./shop.css";
import { Data } from "../../utils/albumsData";
import { Header } from "../../Components/header/header";
import { Footer } from "../../Components/footer/footer";
import { AlbumList } from "../../Components/AlbumsList/AlbumsList";

const app = document.querySelector("#app");
const main = document.createElement("main");

export const Shop = (list) => {
  app.innerHTML = "";
  app.innerHTML = Header();

  main.classList.add("fade-in");
  main.innerHTML = AlbumList(Data);
  app.appendChild(main);

  const filtersBar = document.querySelector('.filters-bar');
  filtersBar.style.display = 'flex';

  app.innerHTML += Footer();
};
