//React, React Dom
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import '../assets/styles/components/Header.scss';



export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <span>Chat App</span>
            </Link>
            <div className="header__menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>
                    <li>
                        <Link to="/members">Members</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
