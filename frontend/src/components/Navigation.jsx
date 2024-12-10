import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-blue-800 p-4 fixed top-0 left-0 w-full">
            <ul className="flex space-x-4">
                {/* Home Link */}
                <li>
                    <NavLink
                        end
                        to="/"
                        className={({ isActive }) =>
                            `text-white hover:text-gray-300 ${
                                isActive ? 'font-bold underline' : ''
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                {/* About Link */}
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-white hover:text-gray-300 ${
                                isActive ? 'font-bold underline' : ''
                            }`
                        }
                    >
                        About
                    </NavLink>
                </li>

                {/* Testimonials Link */}
                <li>
                    <NavLink
                        to="/testimonials"
                        className={({ isActive }) =>
                            `text-white hover:text-gray-300 ${
                                isActive ? 'font-bold underline' : ''
                            }`
                        }
                    >
                        Testimonials
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;