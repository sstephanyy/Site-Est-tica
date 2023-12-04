import Header from './componentes/Header.jsx';
import { NavBar } from './componentes/Navbar.jsx';
import  Home from './componentes/Home.jsx';
import Products from './componentes/Products.jsx';
import { ProvaSocial } from './componentes/ProvaSocial.jsx'; 
import Especialidades from './componentes/Especialidades.jsx';
import SobreNos from './componentes/SobreNos.jsx';
import NossoEsapaco from './componentes/NossoEspaco.jsx';
import NossaEquipe from './componentes/NossaEquipe.jsx';
import Contato from './componentes/Contato.jsx';
import { ContatoForm } from './componentes/ContatoForm.jsx';


function App() {

  return (
    <div>
      <Header/>
      <NavBar/>
      <Home/>
      <Products/>
      <ProvaSocial/>
      <Especialidades/>
      <SobreNos/>
      <NossoEsapaco/>
      <NossaEquipe/>
      <Contato/>
      <ContatoForm/>
    </div>
   
        
  );
}

export default App;
