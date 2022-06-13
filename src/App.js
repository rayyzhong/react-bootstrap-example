import logo from './logo.svg';
import './App.css';
import { Button, Container } from 'react-bootstrap';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Main from './components/Main';
import { Fragment } from 'react';



function App() {
  return (
    <Container>
      <Fragment>
        <Menu />
        <Main />
        <Footer />
      </Fragment>
    </Container>
  );
}

export default App;
