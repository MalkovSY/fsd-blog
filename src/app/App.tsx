import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";

const App = () => {
    const { theme, toggleTheme }  = useTheme();

    const className = classNames('app', {}, [theme]);

    return (
        <div className={className}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to='/about'>about</Link>
            <Link to='/main'>main </Link>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path={'/main'} element={<AboutPage/>}/>
                    <Route path={'/about'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;

