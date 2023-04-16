import { Data } from "./albumsData";

export const linkPage = (id, page) => {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.matches(id) || event.target.closest(id)) {
      console.log(id);
      page(Data);
    }
  });
};
