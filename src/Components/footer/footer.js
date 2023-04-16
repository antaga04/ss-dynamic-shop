import "./footer.css";

export const Footer = () => {
  return `
    <footer id="footer">
      <div>
        <p>© 2023 Solid Sounds. All rights reserved.</p>
      </div>
      <div>
        <ul class="flex social-icons">
          <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
      </div>
      <div class="right-footer">
        <p>POWERED BY ANTA</p>
        <a href="#"><img src="https://res.cloudinary.com/drsfru9lj/image/upload/v1681568524/Rock%20Shop/solid-sounds-logo_vwl7d8.png" alt="Logo"></a>
      </div>
    </footer>
  `;
};
