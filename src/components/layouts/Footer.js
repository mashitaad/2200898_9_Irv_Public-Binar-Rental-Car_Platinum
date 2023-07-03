import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch } from 'react-icons/fi';
import './styles/footer.css';
import { Container } from 'reactstrap';
import logo from '../../assets/icons/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="d-flex justify-content-between flex-column flex-lg-row">
        <address className="space-container">
          Jalan Suroyo No. 161 Mayangan Kota <br />
          Probolonggo 672000 <br style={{ marginBottom: '3vh' }} />
          binarcarrental@gmail.com <br style={{ marginBottom: '3vh' }} />
          081-233-334-808 <br style={{ marginBottom: '3vh' }} />
        </address>

        <nav className="navbar">
          <ul>
            <li>
              <a href="#our-services">Our Services</a>
            </li>
            <li>
              <a href="#why-us">Why Us</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>

        <div className="space-container">
          <p>Connect with us</p>
          <ul className="d-flex">
            <li className="icon-footer">
              <a href="#">
                <FiFacebook className="fi" />
              </a>
            </li>
            <li className="icon-footer">
              <a href="#">
                <FiInstagram className="fi" />
              </a>
            </li>
            <li className="icon-footer">
              <a href="#">
                <FiTwitter className="fi" />
              </a>
            </li>
            <li className="icon-footer">
              <a href="#">
                <FiMail className="fi" />
              </a>
            </li>
            <li className="icon-footer">
              <a href="#">
                <FiTwitch className="fi" />
              </a>
            </li>
          </ul>
        </div>

        <div className="space-container">
          <p>Copyright Binar 2022</p>
          <img src={logo} alt="logo" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
