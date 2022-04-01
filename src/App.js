import { Component } from "react";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
