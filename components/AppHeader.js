import { memo } from 'react';
import cn from 'classnames';

import Nav from './AppNavbar';

const Header = ({ sticky = true }) => {
  return (
    <>
      <header className={cn({ sticky })}>
        <Nav />
      </header>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          background: #fff;
          z-index: 1000;
          border-bottom: 1px solid #eaeaea;
          box-shadow: 0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #dadce0;
        }
        header.sticky {
          position: sticky;
          top: 0;
        }
      `}</style>
    </>
  );
};

export default memo(Header);
