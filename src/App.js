import { fetchTables } from '../src/redux/tablesRedux';
import {  Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import Error from './components/pages/Error/Error';
import Navigation from './components/views/Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
    <Container style={{width: "1000px"}}>
    <Navigation/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>

    </Container>
  </main>
  );
}

export default App;
