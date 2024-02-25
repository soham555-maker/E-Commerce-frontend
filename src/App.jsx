import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';


function App() {
  const [count, setCount] = useState("shop");
  return (
    <>
      <header>
        <Navbar getCatagory2={setCount}/>
        
      </header>
      <main>
        <Outlet context={[count, setCount]}/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
