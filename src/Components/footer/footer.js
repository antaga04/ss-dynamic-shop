import "./footer.css";

export const Footer = () => {
  return `
    <footer id="footer">
      <div>
        <p>© 2023 Solid Sounds. <span translate="yes">All rights reserved.</span></p>
      </div>
      <div>
        <ul class="flex social-icons">
          <li>
            <a href="https://github.com/antaga04" target="_blank" rel="noopener">
              <i class="fa-brands fa-github"></i></a></li>
          <li>
            <a href="https://www.linkedin.com/in/adrian-anta-gil/" target="_blank" rel="noopener">
              <i class="fa-brands fa-linkedin-in"></i></a></li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener">
              <i class="fa-brands fa-facebook"></i></a></li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener">
              <i class="fa-brands fa-instagram"></i></a></li>
        </ul>
      </div>
      <div class="right-footer">
        <p>POWERED BY ANTA</p>
        <a href="/"><img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1681568524/Rock%20Shop/solid-sounds-logo_vwl7d8.png" alt="Logo"></a>
      </div>
    </footer>
  `;
};
