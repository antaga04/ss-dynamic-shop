import "./popular.css";
import { Footer } from "../../Components/footer/footer";
import { Header } from "../../Components/header/header";

export const Popular = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  const main = document.createElement("main");
  app.innerHTML = Header();

  main.innerHTML = `
    <div class="popular-main">
      <h1>Top Sales</h1>
      <div>
        Comming soon...
      </div>
    </div>
  `;

  app.appendChild(main);
  app.innerHTML += Footer();
};
