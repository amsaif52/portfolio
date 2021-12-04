import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Design from "./components/design/Design";
import EmployeeScape from "./components/employeeScape/EmployeeScape";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ux-design" element={<Design />} />
        <Route path="/ux-design/employeescape" element={<EmployeeScape />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
