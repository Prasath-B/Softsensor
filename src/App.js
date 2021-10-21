import  Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Cart from "./components/Cart";
import {Provider} from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>

        <Route exact path='/'>
        <Navbar />
        <Home />
        </Route>

        <Route path='/cart'>
          <Cart />
        </Route>

      </Switch>
    </Router>
</Provider>
  
      
 
        
    
  );
}

export default App;
