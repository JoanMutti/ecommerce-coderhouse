import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AppContextProvider from './context/AppContext';
import Cart from './components/Cart'


function App() {
  return (
    <AppContextProvider>
      <BrowserRouter className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:categoryId" component={Products} />
          <Route exact path="/item/:itemId" component={ProductDetail} />
          <Route exact path="/cart/" component={Cart} />
          <Route exact path="*">
            <h1>404 - No se encontro la pagina</h1>
            {/* <Redirect to='/' />  Puedo redirigir directamente a otra pagina */}
          </Route>
          {/* Aca puedo poner la pagina que se mostrara si la ruta no es conocida como tambien puedo definirla como arriba con un "*" */}
        </Switch>

      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
