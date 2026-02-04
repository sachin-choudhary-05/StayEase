
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./componant/landing/hero/Hero";
import About from "./componant/landing/about/About";
import Booking from "./componant/landing/booking/Booking";
import Rooms from "./componant/landing/rooms/Rooms";
import Newsletter from "./componant/landing/footer/Footer";
import Navbar from "./componant/navbar/Navbar";
import Activities from "./componant/landing/activities/Activities";
import Footer from "./componant/landing/footer/Footer";
import Portfolio from "./componant/landing/portfolio/Portfolio";





function App() {
  return (
    <>
     <Navbar/>
     <Routes>
          
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/activities' element={<Activities/>} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/newsletter' element={<Newsletter />} />
          
          
        </Routes>

        <Footer/>
     
    </>

    
  );
}

export default App;
