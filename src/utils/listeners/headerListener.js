import { AlbumList } from "../../Components/AlbumsList/AlbumsList";

export const headerListeners = (target, match, drop, content) => {
  target.addEventListener("click", (event) => {
    if (event.target.matches(match)) {
      const dropFilters = document.querySelector(drop);
      const filterContent = document.querySelector(content);
      console.log(drop);
      dropFilters.classList.toggle("menu-mode");
      filterContent.classList.toggle("menu-mode");
    }
  });
};

export const yes = (target, match, drop, content, data) => {
  target.addEventListener("click", (event) => {
    const oldMain = document.querySelector("main");
    /* +[añadir] seleccionar los input de price */
    const checkboxes = document.querySelectorAll(
      '.checkBoxBtn input[type="checkbox"]:checked'
    );
    const selectedBoxes = Array.from(checkboxes).map(
      (checkbox) => /* checkbox.labels[0].textContent */ checkbox.id
    );
    let filteredData = data.filter(
      (album) =>
        selectedBoxes.includes(album.genre) ||
        selectedBoxes.includes(album.year)
        // console.log(album.year%100)
    );

    if (filteredData.length === 0) {
      filteredData = data;
    }

    if (event.target.matches(match)) {
      const dropFilters = document.querySelector(drop);
      const filterContent = document.querySelector(content);
      console.log(drop);
      dropFilters.classList.remove("menu-mode");
      filterContent.classList.remove("menu-mode");

      console.log("search+");
      console.log(checkboxes);
      console.log("selected boxes -", selectedBoxes);
      console.log(filteredData);

      oldMain.innerHTML = "";
      oldMain.innerHTML = AlbumList(filteredData);
    }

    if (event.target.matches(".clear-btn")) {
      console.log("clear");
      // +[añadir] quitar los checked filters de la lista checkboxes
      oldMain.innerHTML = "";
      oldMain.innerHTML = AlbumList(data);
    }
  });
};
