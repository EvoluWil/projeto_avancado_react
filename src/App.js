import './App.css';
import ProductView from "./Views/NewProductView.js"
import {ProductListView} from "./Views/ProductListView.js"

function App() {
  return (
    <div className="App">
      <ProductView/>
      <ProductListView/>
    </div>
  );
}

export default App;
