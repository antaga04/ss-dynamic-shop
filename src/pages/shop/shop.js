import "./shop.css";
import { Data } from "../../utils/albumsData";
import { AlbumList } from "../../components/AlbumsList/AlbumsList";
import { Header } from "../../Components/header/header";
import { Footer } from "../../Components/footer/footer";

export const Shop = (list) => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const main = document.createElement("main");
  app.innerHTML = Header();

  main.innerHTML = AlbumList(Data);

  app.appendChild(main);
  app.innerHTML += Footer();
};


