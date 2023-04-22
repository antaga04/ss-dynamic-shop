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
}
