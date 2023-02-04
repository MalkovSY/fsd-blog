import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import './index.scss';

const App = () => {
    return (
        <div className='app'>
            <Link to='/main'>main</Link>
            <Link to='/about'>about</Link>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path={'/main'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;

