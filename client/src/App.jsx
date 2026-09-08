import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MarketplacePage from "./pages/MarketplacePage";
import ProductPage from "./pages/ProductPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<MarketplacePage />}
        />

        <Route
          path="/product/:id"
          element={<ProductPage />}
        />

        <Route
          path="/confirmation"
          element={<ConfirmationPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;