import FunctionComponent from '../src/FunctionComponent/FunctionComponent'
import './App.css';

let puppiesData = [
  {
      Nombre: 'Firulais',
      Edad: 11, 
      Sexo:'Macho', 
      Raza:'Pastor alemán',
      Tamanio: 'Grande'
  },
  {
      Nombre:'Maya',
      Edad:13,
      Sexo:'Hembra',
      Raza: 'Pug',
      Tamanio:'Chico'
  },
  {
      Nombre: 'Pipo',
      Edad:5,
      Sexo:'Macho',
      Raza: 'Schnauzer',
      Tamanio: 'Mediano'
  },
  {
      Nombre: 'Pacha',
      Edad: 2,
      Sexo: 'Hembra',
      Raza: 'Mestizo',
      Tamanio: 'Chico'
  }
]

function App() {
  return (
    <div>
      <h1>Clientes caninos de Veterinaria</h1>
      <FunctionComponent data= {puppiesData}/>
    </div>
  );
}

export default App;
