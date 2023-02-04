import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import './styles/index.scss';
import { useTheme } from "./theme/useTheme";

// test
const App = () => {
    const { theme, toggleTheme }  = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to='/about'>about</Link>
            <Link to='/main'>main </Link>
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

