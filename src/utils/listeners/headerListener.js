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
    /* seleccionar los input de price */
    const priceMinInput = document.querySelector("#min-input").value;
    const priceMaxInput = document.querySelector("#max-input").value;

    /* seleccionar los checkbox de filters, genre y year */
    const checkboxes = document.querySelectorAll(
      '.checkBoxBtn input[type="checkbox"]:checked'
    );
    const selectedBoxes = Array.from(checkboxes).map((checkbox) => checkbox.id);

    /* filtrar los boxes */
    let filteredDataConcat = [];
    let filteredDataGenre = data.filter((album) => {
      if (selectedBoxes.includes(album.genre)) {
        return true;
      }
      return false;
    });

    let filteredDataYear = data.filter((album) => {
      if (
        selectedBoxes.includes(
          ((Math.floor(album.year / 10) * 10) % 100).toString()
        )
      ) {
        return true;
      }
      if (selectedBoxes.includes("0") && album.year >= 2000) {
        return true;
      }
      return false;
    });

    let filteredDataPrice = data.filter((album) => {
      if (album.price >= priceMinInput && album.price <= priceMaxInput) {
        return true;
      }
    });

    filteredDataConcat = filteredDataGenre.concat(
      filteredDataYear,
      filteredDataPrice
    );

    // filteredDataConcat = filteredDataGenre + filteredDataYear + filteredDataPrice;

    let duplicates = filteredDataConcat.filter(
      (item, index) => filteredDataConcat.indexOf(item) !== index
    );

    /* PROBLEMAS: 
          1. si no hay filtros seleccionados => debería mostrar todos al buscar
          2. si se usa solo un filtro => debería filtrar bien
          3. si se usa más de un filtro  => debería filtrar bien
          4. si no hay coincidencias => debería mostrar "no coincidences..." 
          */
    if (duplicates.length === 0) {
      duplicates = filteredDataConcat;
    }

    if (event.target.matches(match)) {
      console.log("search+");
      console.log("concat =>", filteredDataConcat);
      console.log("duplicates =>", duplicates);

      console.log("price min -", priceMinInput);
      console.log("price max -", priceMaxInput);
      console.log("price -", filteredDataPrice);

      /* dejamos de mostrar los filtros */
      const dropFilters = document.querySelector(drop);
      const filterContent = document.querySelector(content);
      dropFilters.classList.remove("menu-mode");
      filterContent.classList.remove("menu-mode");

      /* pintamos la lista con los datos filtrados */
      oldMain.innerHTML = "";
      oldMain.innerHTML = AlbumList(duplicates);

      console.log("selected boxes -", selectedBoxes);
      console.log(duplicates);
    }

    if (event.target.matches(".clear-btn")) {
      console.log("clear");
      oldMain.innerHTML = "";
      oldMain.innerHTML = AlbumList(data);
      /* quitar los checked filters de la lista checkboxes */
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  });
};

/* let filteredData = data.filter((album) => {
  if (selectedBoxes.includes(album.genre)) {
    return true;
  }
  if (selectedBoxes.includes(((Math.floor(album.year / 10) * 10) % 100).toString())) {
    return true;
  }
  if (selectedBoxes.includes("0") && album.year >= 2000) {
    return true;
  }
  return false;
}); */

/* let filteredData = data.filter((album) => {
  const hasSelectedGenre = selectedBoxes.includes(album.genre);
  const hasSelectedDecade = selectedBoxes.includes(
    ((Math.floor(album.year / 10) * 10) % 100).toString()
  );
  const isAfterYear2000 = album.year >= 2000;

  if (!hasSelectedGenre) {
    return true;
  }
  return (
    (hasSelectedGenre && hasSelectedDecade) ||
    (hasSelectedGenre && isAfterYear2000) ||
    (hasSelectedDecade && isAfterYear2000)
  );
}); */

/* if (filteredDataGenre.length === 0 && filteredDataYear.length === 0) {
  filteredData = data;
} else if (filteredDataGenre.length === 0 && filteredDataYear) {
  filteredData = filteredDataYear;
} else if (filteredDataYear.length === 0 && filteredDataGenre) {
  filteredData = filteredDataGenre;
} else {
  filteredData = filteredDataGenre.filter((album) =>
    filteredDataYear.includes(album)
  );
} */
