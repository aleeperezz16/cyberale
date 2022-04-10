import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='category/:categoryName' element={<ItemListContainer />} />
          <Route path='details/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
