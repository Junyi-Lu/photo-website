import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route, HashRouter } from "react-router-dom"; // 更新引入
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {" "}
        {/* 使用 Routes 代替 Switch */}
        <Route path="/" element={<Homepage />} exact />{" "}
        {/* 更新 Route 的用法 */}
        <Route path="/about" element={<About />} exact />{" "}
        {/* 更新 Route 的用法 */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
