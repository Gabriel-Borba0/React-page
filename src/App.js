import Navbar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Contaact from "./Components/Contact2/Contact2";
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
      <About/>
      
      <div className= 'Introducao'>
      O produto  consiste em um sistema intuitivo de fácil acesso por parte dos funcionários, com filtros de permissão baseado nos cargos, permitindo alteração e exclusão de dados cadastrados. 
      </div>
      
    
      <Carousel/>

    <Contaact/>

    
    
      

    </div>
  );
}

export default App;
