import { Link } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const { theme, toggleTheme }  = useTheme();

    const className = classNames('app', {}, [theme]);

    return (
        <div className={className}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to='/about'>about</Link>
            <Link to='/'>main </Link>
            <AppRouter />
        </div>
    );
};

export default App;

