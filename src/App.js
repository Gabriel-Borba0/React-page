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
      O produto  consiste em um sistema intuitivo e de fácil acesso pelos funcionários, trazendo  filtros de permissão baseado nos cargos e permitindo alteração e exclusão de dados cadastrados em seu banco de dados de maneira eficiente e segura. 
      </div>
      
    
      <Carousel/>

    <Contaact/>

    
    
      

    </div>
  );
}

export default App;
