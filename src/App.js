
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {Routes, Route} from "react-router-dom"

import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element ={<ItemListContainer greeting ="BIENVENIDOS A DIKUR BAIRES" />} />
          <Route path="item/:id" element ={<ItemDetailContainer stock={1} initial={1} />} />
        </Routes>

        
        
    </div>
  );
}

export default App;
