import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Product from "./components/Product";
import Man from "./components/Man";
import Women from "./components/Women";
import Kids from "./components/Kids";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product" element={<Product />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App;
