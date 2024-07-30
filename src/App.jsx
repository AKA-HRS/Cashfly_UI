import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Home, About, Pricing, Products, Signup } from "./components/pages";
import { NavigationProvider } from "./context/NavContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="products" element={<Products />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </NavigationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
