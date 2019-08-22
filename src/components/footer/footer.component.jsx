import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

import './footer.styles.scss';

const Footer = () => (
    <footer  data-delighter>
        <section className='first-footer'>
            <div className='container'>
                <ul className='row'>
                    <li className='col-md-4 row'>
                        <img src="" alt=""/>
                        <p>Safe shopping<br/>Buy with confidence</p>
                    </li>
                    <li className='col-md-4 row'>
                        <img src="" alt=""/>
                        <p>Fast shipping<br/>Get your product fast</p>
                    </li>
                    <li className='col-md-4 row'>
                        <img src="" alt=""/>
                        <p>Satisfaction guarantee<br/>Or get your money back</p>
                    </li>
                </ul>
            </div>
        </section>
        <section>
            <div className='container'>
                <ul className='row footer-links'>
                    <li className='col-md-2'>
                        <Link className='navbar-brand'><img src={Logo} alt=""/></Link>
                    </li>
                    <li className='col-md-2'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='col-md-2'>
                        <Link to='/collection'>Collection</Link>
                    </li>
                    <li className='col-md-2'>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className='col-md-2'>
                        <Link>Sign In</Link>
                    </li>
                    <li className='col-md-2'>
                        <Link>Cart</Link>
                    </li>
                </ul>
            </div>
        </section>
    </footer>
);

export default Footer; 