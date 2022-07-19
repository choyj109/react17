<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

=======

import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
>>>>>>> 7029b56878acd079ca340aa91d2f7fb95b74f887
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
=======
      <Header  />
>>>>>>> 7029b56878acd079ca340aa91d2f7fb95b74f887
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
