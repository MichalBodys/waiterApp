
import {  Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import Error from './components/pages/Error/Error';
import Navigation from './components/views/Navigation/Navigation';


function App() {
  return (
    <Container>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/table/:id" element={<Table />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
    </Container>
  );
}

export default App;
