import type { Dispatch } from 'react';

import menuCloseIcon from './assets/images/icon-menu-close.svg';

export default function MobileMenu({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: Dispatch<React.SetStateAction<boolean>> }): JSX.Element {
  return (
    <div>
      <div id="menu-mask" aria-hidden data-menu-open={menuOpen} />
      <div id="menu-div" data-menu-open={menuOpen}>
        <button id="menu-close" onClick={() => setMenuOpen(false)}>
          <img id="menu" src={menuCloseIcon} alt="open menu" />
        </button>
        <div id="menu-items">
          <a className="menu" href='./'>Home</a>
          <a className="menu" href='./'>New</a>
          <a className="menu" href='./'>Popular</a>
          <a className="menu" href='./'>Trending</a>
          <a className="menu" href='./'>Categories</a>
        </div>
      </div>
    </div>
  );
}