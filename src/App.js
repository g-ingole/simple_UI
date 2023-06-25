import './App.css';
import Header from './components/Header/Header';
import BodyContent from './components/BodyContent/BodyContent'
import Colorbody from './components/ColorBody/Colorbody';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContent />
      <Colorbody />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
