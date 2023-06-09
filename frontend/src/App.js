import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/'  element={<Layout/>}>
          {/* <Route path='/about' element={<About/>}></Route> */}
        </Route>
      </Route> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
