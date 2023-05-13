/* PROBLEMAS solucionados: 
  1. si no hay filtros seleccionados => debería mostrar todos al buscar
  2. si se usa solo un filtro => debería filtrar bien
  3. si se usa más de un filtro  => debería filtrar bien
  4. si no hay coincidencias => debería mostrar "no coincidences..." 
*/

import { AlbumList, notFound } from "../Components/AlbumsList/AlbumsList";

export const getInPriceRange = (products, priceMin, priceMax) => {
  const minPrice = priceMin.value;
  const maxPrice = priceMax.value;
  console.log(maxPrice);
  console.log(minPrice);
  const filteredAlbums = products.filter((product) => {
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      return product.price >= minPrice && product.price <= maxPrice;
    }
    if (isNaN(minPrice) && !isNaN(maxPrice)) {
      console.log('hi');
      return product.price <= maxPrice;
    }
    if (!isNaN(minPrice) && isNaN(maxPrice)) {
      return product.price >= minPrice;
    }
  });
  if (!isEmpty(filteredAlbums)) {
    return filteredAlbums;
  }
  return products;
};

export const getAlbumsGenre = (products, filtersSelected) => {
  const filteredAlbums = products.filter((album) => {
    if (filtersSelected.includes(album.genre)) {
      return true;
    } else {
      return false;
    }
  });
  if (!isEmpty(filteredAlbums)) {
    return filteredAlbums;
  }
  return products;
};

export const getAlbumsYear = (products, filtersSelected) => {
  const filteredAlbums = products.filter((album) => {
    if (filtersSelected.includes(((Math.floor(album.year / 10) * 10) % 100).toString())) {
      return true;
    }
    if (filtersSelected.includes('0') && album.year >= 2000) {
      return true;
    }
    return false;
  });
  if (!isEmpty(filteredAlbums)) {
    return filteredAlbums;
  }
  return products;
};

export const handlePriceInput = (priceMin, priceMax) => {
  const minPrice = priceMin.value;
  const maxPrice = priceMax.value;

  if (!isNaN(minPrice) && !isNaN(maxPrice) && maxPrice < minPrice) {
    priceMin = maxPrice;
  }

  if (!isNaN(minPrice) && !isNaN(maxPrice) && minPrice > maxPrice) {
    priceMax = minPrice;
  }
};

export const isEmpty = (filtersSelected) => {
  return filtersSelected.length === 0;
};

export const removeModal = () => {
  /* dejamos de mostrar los filtros */
  const modal = document.querySelector('.drop-filters');
  modal.close();
};

export const getFilteredData = (data, selectedBoxes, minPrice, maxPrice) => {
  const priceRange = getInPriceRange(data, minPrice, maxPrice);
  const albumsGenre = getAlbumsGenre(data, selectedBoxes);
  const albumsYear = getAlbumsYear(data, selectedBoxes);

  return priceRange.filter((album) => {
    const match1 = albumsGenre.find((genreAlbum) => album === genreAlbum);
    const match2 = albumsYear.find((yearAlbum) => album === yearAlbum);
    return match1 && match2;
  });
};

export const exitDialog = (dialog) => {
  dialog.addEventListener('click', (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  });
};

export const filterAlbums = (list, keyword) => {
  const filteredAlbums = list.filter(
    (item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.artist.toLowerCase().includes(keyword.toLowerCase())
  );
  const oldMain = document.querySelector('main');
  oldMain.innerHTML = '';
  if (isEmpty(filteredAlbums)) {
    oldMain.innerHTML = notFound();
  } else {
    oldMain.innerHTML = AlbumList(filteredAlbums);
  }
};

export function sortAlbums(albums, order) {
  const newData =
    order === 'desc'
      ? albums.slice().sort((a, b) => b.name.localeCompare(a.name))
      : albums.slice().sort((a, b) => a.name.localeCompare(b.name));

  return newData;
}

export const getCart = (cart) => {
  /* const numberOfCd = document.querySelector('[number-of-cds]');
  console.log(numberOfCd.innerHTML) */
  // Recuperar el carrito de Local Storage
  const cartData = localStorage.getItem('cart');

  // Si hay datos en Local Storage, convertirlos en un objeto de JavaScript
  if (cartData) {
    const cartProducts = JSON.parse(cartData);

    // Agregar los productos del carrito al objeto cart
    cart.products = cartProducts;
    if (cart.product) {
      numberOfCd.innerHTML = cart.product.lenght;
    }
  }
};
