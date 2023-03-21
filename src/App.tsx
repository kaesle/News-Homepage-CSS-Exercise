import './App.css';
import { useState } from 'react';

import Menu from './Menu';

import logo from './assets/images/logo.svg';
import menuOpenIcon from './assets/images/icon-menu.svg';

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <header className="App-header">
        <img id="logo" src={logo} alt="W logo" />
        <button id="menu-open" onClick={() => setMenuOpen(true)}>
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
