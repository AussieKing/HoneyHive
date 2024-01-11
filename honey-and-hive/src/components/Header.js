import React from "react";

// let's add a prop {title} to the Header component, to dynamically display the title of the page
const Header = ({ title }) => {
    return (
        <div>
        <h1>{title}</h1>
        </div>
    );
}  

export default Header;