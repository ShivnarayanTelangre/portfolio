import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/shivnarayan-telangre-b11992258/" className="footer-social-icon" target="_blank">
              <img src={navIcon1} className="bx"/>
            </a>
            <a href="https://github.com/ShivnarayanTelangre" className="footer-social-icon" target="_blank">
              <img src={navIcon2} className="bx"/>
            </a>
           
          </div>

          <span className="footer-copy">&copy;  2024 Shivnarayan Telangre. All rights reserved.</span>
          
          </div>
      </footer>
    </div>
  );
}

export default Footer;
