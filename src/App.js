
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting ="BIENVENIDOS A DIKUR BAIRES"/>
    </div>
  );
}

export default App;
