/* PROBLEMAS solucionados: 
  1. si no hay filtros seleccionados => debería mostrar todos al buscar
  2. si se usa solo un filtro => debería filtrar bien
  3. si se usa más de un filtro  => debería filtrar bien
  4. si no hay coincidencias => debería mostrar "no coincidences..." 
*/

export const getInPriceRange = (products, priceMin, priceMax) => {
  const minPrice = priceMin.value;
  const maxPrice = priceMax.value;
  const filteredAlbums = products.filter((product) => {
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      return product.price >= minPrice && product.price <= maxPrice;
    } else if (isNaN(minPrice) && !isNaN(maxPrice)) {
      return product.price <= maxPrice;
    } else if (!isNaN(minPrice) && isNaN(maxPrice)) {
      return product.price >= minPrice;
    } else {
      return true;
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

export const removeFilters = (drop, content) => {
  /* dejamos de mostrar los filtros */
  const dropFilters = document.querySelector(drop);
  const filterContent = document.querySelector(content);
  dropFilters.classList.remove('menu-mode');
  filterContent.classList.remove('menu-mode');
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
}