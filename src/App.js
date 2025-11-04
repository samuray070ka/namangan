import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './router/Home';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;