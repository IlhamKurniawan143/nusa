import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent"
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import Baru from "./pages/Baru";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimoniPage from "./pages/TestimoniPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";


function App() {

  return <div>
    <BrowserRouter>
      <Helmet>
				<title>Bijakcuan.</title>
			</Helmet>

      <NavbarComponent />
        <Routes>
          <Route path="/login" Component={Login}/>
          <Route path="/daftar" Component={Daftar}/>
          <Route path="/baru" Component={Baru}/>
          <Route path="/" Component={HomePage}/>
          <Route path="/kelas" Component={KelasPage}/>
          <Route path="/testimoni" Component={TestimoniPage}/>
         <Route path="/faq" Component={FaqPage}/>
         <Route path="/syaratketen" Component={SyaratKetenPage}/>
        </Routes>
       <FooterComponent />
    </BrowserRouter>
  </div>
  
}

export default App;
