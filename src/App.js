import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ArticlePage from './router/ArticlePage';
import Home from './router/Home';
import {Routes, Route} from "react-router-dom"
import ProfileForm from './router/ProfileForm';
import VacanciesTable from "./router/VacanciesTable"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<ArticlePage/>}/>
        <Route path='/add' element={<ProfileForm/>}/>
        <Route path='/edit' element={<VacanciesTable/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;