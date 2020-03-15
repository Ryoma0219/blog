import Link from 'next/link';

import Container from './AppContainer';
import Logo from './AppLogo';

const Navbar = () => (
  <Container center>
    <nav>
      <Link href="/">
        <Logo className="visually-hidden" aria-hidden="true" />
      </Link>
    </nav>

    <style jsx>{`
      nav {
        position: relative;
        flex: 1;
        height: 80px;
        display: flex;
        align-items: center;
      }

      .links {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
      }

      .links a {
        text-decoration: none;
        transition: color 0.2s ease;
      }

      .links a:hover {
        color: #000;
      }

      .links a.selected {
        color: #0070f3;
        font-weight: 600;
      }

      .links a:first-child,
      .links a:last-child {
        display: flex;
      }

      a.icon,
      a.icon > :global(div.container) {
        /* Remove additional space from SVG */
        display: inline-flex;
        justify-content: center;
      }

      a.icon > :global(div.container) {
        overflow: visible;
      }

      .mobile-logo,
      .mobile-top {
        display: none;
      }

      .header-feedback {
        display: inline-flex;
      }

      /* Mobile */

      @media (max-width: 640px) {
        .mobile-logo {
          display: block;
        }

        nav {
          height: unset;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 1rem 0;
        }

        nav .links .logo,
        nav .links .icon {
          display: none;
        }

        nav .links a {
          font-size: 14px;
        }

        .mobile-top {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .mobile-top > .icons {
          display: flex;
          align-items: center;
        }

        .mobile-top > .icons a:nth-child(2) {
          margin-left: 2rem;
        }
      }

      @media (max-width: 950px) {
        .header-feedback {
          display: none;
        }
      }
    `}</style>
  </Container>
);

export default Navbar;
