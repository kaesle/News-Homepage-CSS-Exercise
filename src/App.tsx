import './App.css';
import { useState } from 'react';

import MobileMenu from './components/MobileMenu';
import NewSection from './components/NewSection';
import ThumbnailStory from './components/ThumbnailStory';

import logo from './assets/images/logo.svg';
import menuOpenIcon from './assets/images/icon-menu.svg';
import mobileHero from './assets/images/image-web-3-mobile.jpg';
import desktopHero from './assets/images/image-web-3-desktop.jpg';
import thumb1 from './assets/images/image-retro-pcs.jpg';
import thumb2 from './assets/images/image-top-laptops.jpg';
import thumb3 from './assets/images/image-gaming-growth.jpg';

interface Story {
  imgSrc: string;
  number: number;
  headline: string;
  blurb: string;
}

const stories: Story[] = [
  {
    imgSrc: thumb1,
    number: 1,
    headline: "Reviving Retro PCs",
    blurb: "What happens when old PCs are given modern upgrades?"
  },
  {
    imgSrc: thumb2,
    number: 2,
    headline: "Top Ten Laptops of 2022",
    blurb: "Our best picks for various needs and budgets."
  },
  {
    imgSrc: thumb3,
    number: 3,
    headline: "The Growth of Gaming",
    blurb: "How the pandemic has sparked fresh opportunities."
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <div className="narrow">
          <header className="App-header">
            <img id="logo" src={logo} alt="W logo" />
            <button id="menu-open" onClick={() => setMenuOpen(true)}>
              <img id="menu" src={menuOpenIcon} alt="open menu" />
            </button>
            <div id="menu-items">
              <a className="menu" href='./'>Home</a>
              <a className="menu" href='./'>New</a>
              <a className="menu" href='./'>Popular</a>
              <a className="menu" href='./'>Trending</a>
              <a className="menu" href='./'>Categories</a>
            </div>
          </header>
          <div className="grid">
            <img id="mobileHero" src={mobileHero} aria-hidden alt="colorful three-dimensional shapes" />
            <img id="desktopHero" src={desktopHero} aria-hidden alt="colorful three-dimensional shapes" />
            <h1>
              The Bright Future of Web 3.0?
            </h1>
            <div className="headContent">
              <p id="headBlurb">
                We dive into the next evolution of the web that claims to put the power of the platforms
                back in the hands of the people. But is it really fulfilling its promise?
              </p>
              <button className='readMore'>
                <pre>R E A D  M O R E</pre>
              </button>
            </div>
            <NewSection />
            {
              stories.map(s =>
                <ThumbnailStory
                  imgSrc={s.imgSrc}
                  number={s.number}
                  headline={s.headline}
                  blurb={s.blurb}
                />)
            }
          </div>
        </div>
      </main>
    </div>
  );
}
