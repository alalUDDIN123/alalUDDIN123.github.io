import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const socialLinks = [
  {
    id: 1,
    icon: <AiFillGithub />,
    url: "https://github.com/alaluddin123",
    label: "GitHub",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/alal-uddin-066444206/",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: <AiFillInstagram />,
    url: "https://www.instagram.com/alal_uddin_23",
    label: "Instagram",
  },
  {
    id: 4,
    icon: <AiOutlineTwitter />,
    url: "https://twitter.com/alal_uddin63112",
    label: "Twitter",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="footer-row">
        {/* Left */}
        <Col md={4} className="footer-copywright text-center">
          <h4>Built with ❤️ by Alal</h4>
        </Col>

        {/* Center */}
        <Col md={4} className="footer-copywright text-center">
          <h4>© {year} Alal Uddin</h4>
        </Col>

        {/* Right */}
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map(({ id, icon, url, label }) => (
              <li className="social-icons" key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>

      </Row>
    </Container>
  );
}

export default Footer;
