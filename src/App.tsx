import './App.css';
import logo from './assets/images/logo.svg';
import menuOpenIcon from './assets/images/icon-menu.svg';
import menuCloseIcon from './assets/images/icon-menu-close.svg';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <div id="menu-mask" aria-hidden data-menu-open={menuOpen} />
      <div id="menu-div" data-menu-open={menuOpen}>
        <button id="menu-close" onClick={() => setMenuOpen(!menuOpen)}>
          <img id="menu" src={menuCloseIcon} alt="open menu" />
        </button>
        Home
      </div>
      <header className="App-header">
        <img id="logo" src={logo} alt="W logo" />
        <button id="menu-open" onClick={() => setMenuOpen(!menuOpen)}>
          <img id="menu" src={menuOpenIcon} alt="open menu" />
        </button>
      </header>
      <main>
        main
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
