import './App.css';
import { useState } from 'react';

import MobileMenu from './MobileMenu';

import logo from './assets/images/logo.svg';
import menuOpenIcon from './assets/images/icon-menu.svg';
import mobileHero from './assets/images/image-web-3-mobile.jpg';

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <header className="App-header">
        <img id="logo" src={logo} alt="W logo" />
        <button id="menu-open" onClick={() => setMenuOpen(true)}>
          <img id="menu" src={menuOpenIcon} alt="open menu" />
        </button>
      </header>
      <main>
        <img id="mobileHero" src={mobileHero} aria-hidden alt="colorful three-dimensional shapes" />
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
