import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";

export const Navbar = () => {
    const className = classNames('app', {}, []);

    return (
        <div>
            <Link to='/about'>about</Link>
            <Link to='/'>main </Link>
        </div>
    );
};
