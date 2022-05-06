import './App.css';
import Navbar from './Navbar'
import News from './Component/News'
import About from './Component/About'
import Footer from './Component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
