import React from "react";
import { MdDarkMode } from 'react-icons/md'

const Header = ({ handleDarkMode }) => {
    return (
        <div className="header">
            <h1>New Notes</h1>
            <button onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)} className="save"><MdDarkMode/></button>
        </div>
    )
};

export default Header