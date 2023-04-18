import "./shop.css";
import { Data } from "../../utils/albumsData";
import { Header } from "../../Components/header/header";
import { Footer } from "../../Components/footer/footer";
import { AlbumList } from "../../Components/AlbumsList/AlbumsList";
import { Filters } from "../../Components/Filters/Filters";

const app = document.querySelector("#app");
const main = document.createElement("main");
const filtersSection = document.createElement("section");

export const Shop = (list) => {
  app.innerHTML = "";
  app.innerHTML = Header();

  filtersSection.setAttribute('id', 'filters')
  filtersSection.innerHTML = Filters();
  app.appendChild(filtersSection);

  main.classList.add("fade-in");
  main.innerHTML = AlbumList(Data);

  app.appendChild(main);
  app.innerHTML += Footer();
};
