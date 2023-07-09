import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"; 
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Contact from "./components/contacts/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
function App() {
  const[menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
     
     <Intro/>
     <Testimonials/>
     <Works/>
     <Contact/>
     <Portfolio/>
        
      </div>
    </div>
  );
}
export default App;