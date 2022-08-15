//import logo from './logo.svg';
import ClassComponent from '../ClassComponent/ClassComponent';
import FunctionComponent from '../FunctionComponent/FunctionComponent'
import './App.css';
import satisfied from './img/satisfied.png';
import info_perritos from '../Componentes/db';
import Perritos from '../Componentes/perrito';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={satisfied}/>
        <h1>HOLA BEBITO FIU FIU</h1>
      </header>
      <ClassComponent titulo='componente de clase'/>
      <FunctionComponent titulo='componente de funcion'/>
      <div>
      {
        info_perritos.map((perrito, index) => <perrito key={index} perros = {perrito}/> )
      }
      </div>
    </div>
  );
}

export default App;
