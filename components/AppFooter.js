import Container from './AppContainer';
import AppLogo from './AppLogo';

const Footer = () => (
  <Container wide gray>
    <Container>
      <footer>
        <style jsx>
          {`
            footer {
              padding: 1rem 0;
              min-height: 16px;
            }
            p,
            .copyright {
              color: #8c8c8c;
              align-items: center;
              display: flex;
            }
            .logo {
              margin-right: 12px;
            }
          `}
        </style>
        <div className="copyright">
          <div className="logo">
            <AppLogo height={24} width={80} />
          </div>
          <div> Copyright © {`${new Date().getFullYear()}`} Ohoshi.me. All rights reserved.</div>
        </div>
      </footer>
    </Container>
  </Container>
);

export default Footer;
