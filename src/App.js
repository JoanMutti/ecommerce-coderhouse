import './App.css';
import NavBar from './components/NavBar/'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:categoryId" component={Products} />
        <Route exact path="/item/:itemId" component={ItemDetailContainer} />
        <Route exact path="*">
          <h1>404 - No se encontro la pagina</h1>
          {/* <Redirect to='/' />  Puedo redirigir directamente a otra pagina */}
        </Route>
        {/* Aca puedo poner la pagina que se mostrara si la ruta no es conocida como tambien puedo definirla como arriba con un "*" */}
      </Switch>

    </BrowserRouter>
  );
}

export default App;
