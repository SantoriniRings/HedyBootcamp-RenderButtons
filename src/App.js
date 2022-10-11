import './App.css';
import Nav from './components/Nav';
import { useState } from "react"
import Button from './components/Button';
import Sinopsis from './components/Sinopsis';
import GroupCards from './components/GroupCards';


function App() {

  const [showSinopsis, setShowSinopsis] = useState(false)
  const [showEvas, setShowEvas] = useState(false)


  return (

    <div className="App">
      <Nav />

      <div className="container-principal">
        <Button onClick={() => setShowSinopsis(!showSinopsis)} name={showSinopsis ? "Ocultar Sinopsis" : "Mostrar Sinopsis"}/>
        <Button name={showEvas ? "Ocultar Evas" : "Mostrar Evas"} onClick={() => setShowEvas(!showEvas)} />
        { showEvas && <p>God </p> }
        { showSinopsis && <Sinopsis />}
        
      </div>
        
    </div>
  );
}

export default App;
