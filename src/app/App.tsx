import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/useTheme/useTheme";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import './styles/index.scss';

const App = () => {
    const { theme }  = useTheme();

    const className = classNames('app', {}, [theme]);

    return (
        <div className={className}>
            <Navbar />
            <div className='contentWrapper'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;

