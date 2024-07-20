import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import Hobbies from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Hobbies />
      {/* <Skills /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;