import './App.css';
import Home from './components/pages/Home/Home';
import {Routes,Route} from "react-router-dom";
import Details from './components/pages/Details/Details';
import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Details/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
