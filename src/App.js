import Nav from './components/nav/Nav'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="app">
        <Nav />
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
