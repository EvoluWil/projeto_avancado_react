import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {ProductListView} from "./Views/ProductListView.js"
import ProductView from "./Views/NewProductView.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div>
            <ul className="link-list">
              <li>
                <Link to="/">Novo</Link>
              </li>
              <li>
                <Link to="/list">Lista</Link>
              </li>
            </ul>
          </div>
        </header>
        <div>
          <Route path={"/"} exact component={ProductView} />
          <Route path={"/list"} component={ProductListView} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
