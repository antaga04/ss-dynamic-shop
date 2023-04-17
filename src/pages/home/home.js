import "./home.css";
import { Footer } from "../../Components/footer/footer";
import { Header } from "../../Components/header/header";

export const Home = () => {
  const app = document.querySelector("#app");
  app.innerHTML = ""
  const main = document.createElement("main");
  app.innerHTML = Header();

  main.innerHTML = `
    <div class="h-main">
      <img class="h-hero" src="https://res.cloudinary.com/drsfru9lj/image/upload/v1681590736/Rock%20Shop/music-cover_uwhk2l.jpg" alt="Hero">
    </div>`
  
  app.appendChild(main)
  app.innerHTML += Footer();
};

