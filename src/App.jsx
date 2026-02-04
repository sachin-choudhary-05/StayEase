
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./component/landing/hero/Hero";
import About from "./component/landing/about/About";
import Booking from "./component/landing/booking/Booking";
import Rooms from "./component/landing/rooms/Rooms";
import Newsletter from "./component/landing/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Activities from "./component/landing/activities/Activities";
import Footer from "./component/landing/footer/Footer";
import Portfolio from "./component/landing/portfolio/Portfolio";





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
