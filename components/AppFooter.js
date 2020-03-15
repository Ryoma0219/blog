import Container from './AppContainer';

const Footer = () => (
  <Container wide gray>
    <Container>
      <footer>
        <style jsx>
          {`
            footer {
              padding: 1rem 0 2rem;
              min-height: 16px;
            }
            p,
            .copyright {
              color: #8c8c8c;
            }
          `}
        </style>
        <div className="copyright f6">
          <div> Copyright © {`${new Date().getFullYear()}`} Ohoshi.me. All rights reserved.</div>
        </div>
      </footer>
    </Container>
  </Container>
);

export default Footer;
