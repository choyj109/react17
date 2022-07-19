import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
