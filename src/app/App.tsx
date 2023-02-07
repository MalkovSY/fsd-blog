import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "shared/lib/useTheme/useTheme";

import './styles/index.scss';

const App = () => {
    const { theme }  = useTheme();

    const className = classNames('app', {}, [theme]);

    return (
        <div className={className}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;

