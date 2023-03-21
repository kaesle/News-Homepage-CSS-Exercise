import './App.css';
import { useState } from 'react';

import MobileMenu from './components/MobileMenu';

import logo from './assets/images/logo.svg';
import menuOpenIcon from './assets/images/icon-menu.svg';
import mobileHero from './assets/images/image-web-3-mobile.jpg';

export default function App() {
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
        <h1>
          The Bright Future of Web 3.0?
        </h1>
        <p id="headBlurb">
        We dive into the next evolution of the web that claims to put the power of the platforms
        back in the hands of the people. But is it really fulfilling its promise?
        </p>
        <button className='readMore'>
          <pre>R E A D  M O R E</pre>
        </button>
      </main>
      <footer>
      </footer>
    </div>
  );
}
