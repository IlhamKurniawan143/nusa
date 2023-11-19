import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent"

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimoniPage from "./pages/TestimoniPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";


function App() {

  return <div>
    
    <Routes>
      <Route path="/login" Component={Login}/>
      <Route path="/" Component={HomePage}/>
      <Route path="/kelas" Component={KelasPage}/>
      <Route path="/testimoni" Component={TestimoniPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/syaratketen" Component={SyaratKetenPage}/>
    </Routes>
  </div>
  
}

export default App;
