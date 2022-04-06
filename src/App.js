import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import ComposantA from "./pages/ComposantA"
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/composantA" element={<ComposantA />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
