import './App.css';
import Home from './components/pages/Home/Home';
import {Routes,Route} from "react-router-dom";
import Details from './components/pages/Details/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Details/>}/>
      </Routes>
     <div>footer</div>
    </div>
  );
}

export default App;
