import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navegacion } from './components/navbar/Navegacion';
import { Contenedor } from './components/itemlistcontainer/Contenedor';



const App = () => {
  return (
    <>
      <Router>
        <Navegacion />
        <Contenedor />

      </Router>
    </>
  );
};

export default App;