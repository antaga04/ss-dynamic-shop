import "./AlbumCard.css"

export const AlbumCard = (album) => {
  return `
    <article class="album-card">
      <img src=${album.cover} alt='${album.name}' />
      <h3>${album.name}</h3>
      <h5>${album.artist}</h5>
    </article>
  `
}