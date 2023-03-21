import './App.css';
import logo from './assets/images/logo.svg';
import menuOpen from './assets/images/icon-menu.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} alt="W logo" />
        <img id="menu-open" src={menuOpen} alt="open menu" />
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
