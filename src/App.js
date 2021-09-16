import { useState } from 'react'
import Nav from './components/nav/Nav'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './app.css'
import './global.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className='sections'>
          <Intro />
          <Portfolio />
          <Works />
          <Contact />

        </div>
    </div>
  );
}

export default App;
