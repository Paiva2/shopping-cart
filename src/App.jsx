import "./App.css";
import ConfirmTotal from "./components/ConfirmTotal";
import ProductContainer from "./components/ProductContainer";
import { GlobalStorage } from "./GlobalContext";

function App() {
  return (
    <GlobalStorage>
      <div className="main">
        <div className="main-child">
          <ProductContainer />
          <ConfirmTotal />
        </div>
      </div>
    </GlobalStorage>
  );
}
export default App;
