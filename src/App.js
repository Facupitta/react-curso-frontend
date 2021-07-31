//Components
import Header from './components/Header'
import Presentacion from './components/Presentacion'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

//Styles
import './styles/Header.css'
import './styles/Presentacion.css'
import './styles/Portfolio.css'
import './styles/About.css'
import './styles/Contact.css'
import './styles/Footer.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Presentacion></Presentacion>
      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
