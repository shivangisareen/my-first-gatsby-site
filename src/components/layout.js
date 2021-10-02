import * as React from "react";
import { Link } from "gatsby";

import { container, title, navBar, navLink } from "./layout.module.css";

const Layout = ({subTitle, subText}) => {
    return (
        <div className={container}>
            <h1 className={title}>MY FIRST GATSBY WEBSITE</h1>
            <nav className={navBar}>
                <Link to="/" className={navLink}>Home</Link> 
                <Link to="/about" className={navLink}>About</Link>
            </nav>
            <h3>{subTitle}</h3>
            <p>{subText}</p>
        </div>
    );
};

export default Layout;