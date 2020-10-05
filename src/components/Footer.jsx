//React, React Dom
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import '../assets/styles/components/Footer.scss';



export default function Footer() {
    return (
        <footer className="footer">
            <span>Dilan Ariza</span>
            <div className="footer__menu">
                <ul>
                    <li>
                        <Link to="/terms-and-conditions">Terms and conditions</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
