import "./home.css";
import { Footer } from "../../Components/footer/footer";
import { Header } from "../../Components/header/header";
import { AlbumList } from "../../Components/AlbumsList/AlbumsList";
import { Data } from "../../utils/albumsData";

const homeAlbums = [
  "Vitalogy",
  "Boston",
  "Doolittle",
  "Master of Puppets",
  "Black Album",
  "Who Made Who",
  "Surfing with the Alien",
  "Californication",
  "Hardwired... to Self-Destruct",
  "Get a Grip",
  "Walk On",
  "Appetite for Destruction",
  "Jazz",
  "Fly by Night",
  "Smash",
];

export const Home = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const main = document.createElement("main");
  app.innerHTML = Header();
  main.classList.add("ss-noise");
  main.innerHTML = `
    <article class="h-main" style="position: relative;">
      <a id="shopLink" class="discover-btn" href="#shop" style=""><p>Shop now</p></a>
      <img class="h-hero" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1681590736/Rock%20Shop/music-cover_uwhk2l.jpg" alt="Hero">
    </article>
    <article>
      <div class="home-top"><h2>new arrivals</h2><span>[${homeAlbums.length}]</span></div>
    </article>
  `;

  main.innerHTML += AlbumList(Data, homeAlbums);
  app.appendChild(main);

  const albumList = document.querySelector('.album-list');
  albumList.style.padding = '0 1rem 2rem 1rem';

  const outerAlbumList = document.querySelector('#album-list');
  outerAlbumList.style.padding = '0';
  

  app.innerHTML += Footer();
};
