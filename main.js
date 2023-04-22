import "./style.css";
import { Home } from "./src/pages/home/home";
import { Shop } from "./src/pages/shop/shop";
import { linkPage } from "./src/utils/linkPage";
import { About } from "./src/pages/about/about";
import { Popular } from "./src/pages/popular/popular";
import { Cart } from "./src/pages/cart/cart";
import { Data } from "./src/utils/albumsData";
import { AlbumList } from "./src/Components/AlbumsList/AlbumsList";

Home();
linkPage("#homeLink", Home);
linkPage("#shopLink", Shop);
linkPage("#popularLink", Popular);
linkPage("#aboutLink", About);
linkPage("#cartLink", Cart);

const app = document.querySelector("#app");

app.addEventListener("change", (ev) => {
  if (ev.target.matches('input[id="searchInput"]')) {
    filterAlbums(Data, ev.target.value);
    const filtersBar = document.querySelector(".filters-bar");
    filtersBar.style.display = "flex";
    // console.log(ev.target);
  }
});

const filterAlbums = (list, keyword) => {
  const filteredAlbums = list.filter(
    (item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.artist.toLowerCase().includes(keyword.toLowerCase())
  );
  const oldMain = document.querySelector("main");
  oldMain.innerHTML = "";
  oldMain.innerHTML = AlbumList(filteredAlbums);
};
