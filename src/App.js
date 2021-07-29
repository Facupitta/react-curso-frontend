//Components
import Header from './components/Header';
import Presentacion from './components/Presentacion'
import Portfolio from './components/Portfolio';

//Styles
import './styles/Header.css'
import './styles/Presentacion.css'
import './styles/Portfolio.css'


function App() {
  return (
    <div>
      <Header></Header>
      <Presentacion></Presentacion>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
