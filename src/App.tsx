import './index.scss';
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";

const App = () => {
    return (
        <div className='app'>
            <Link to='/main'>main</Link>
            <Link to='/about'>about</Link>
            <Routes>
                <Route path={'/main'} element={<MainPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
        </div>
    );
};

export default App;

