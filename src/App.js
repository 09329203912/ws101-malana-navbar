import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero'
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';


function App () {
    return (
        <div className="App">
            <NavBar/>
            <div className="container">
                <Routes>
                    <Route path='/home' element={<Hero/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
