import React from 'react';
import { Link } from 'react-router-dom';

const AdditionalPages = props => 
    <div>
        <ul>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
    </div>



export default AdditionalPages;