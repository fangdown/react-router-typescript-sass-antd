import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/about';
import Home from './component/home';
import Antd from './component/antd';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/antd" element={<Antd />} />
            </Routes>
        </Router>
    );
}

export default App;
