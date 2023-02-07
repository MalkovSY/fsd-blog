import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme }  = useTheme();

    const className = classNames('app', {}, [theme]);

    return (
        <div className={className}>
            <Navbar />
            <button onClick={toggleTheme}>toggle theme</button>
            <AppRouter />
        </div>
    );
};

export default App;

