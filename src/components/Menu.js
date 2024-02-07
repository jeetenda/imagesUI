import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ isOpen }) => {
    return (
        <div className={`absolute top-12  bg-white shadow-md rounded-md p-2 ${isOpen ? 'block' : 'hidden'}`}>
            <ul>
                <li className="py-1 px-3 hover:bg-gray-100">
                    <Link to="/" className="cursor-pointer block">1. Home</Link>
                </li>
                <li className="py-1 px-3 hover:bg-gray-100">
                    <Link to="/results" className="cursor-pointer block">2. Results</Link>
                </li>
                <li className="py-1 px-3 hover:bg-gray-100">
                    <Link to="/" className="cursor-pointer block">3. About</Link>
                </li>
                <li className="py-1 px-3 hover:bg-gray-100">
                    <Link to="/" className="cursor-pointer block">4. Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
