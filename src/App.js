

//Components
import Header from './components/Header'
import Presentacion from './components/Presentacion'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Container  from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'

//Styles
import './styles/Header.css'
import './styles/Presentacion.css'
import './styles/Portfolio.css'
import './styles/About.css'
import './styles/Contact.css'
import './styles/Footer.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
