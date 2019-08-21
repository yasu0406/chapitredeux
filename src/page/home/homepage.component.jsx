import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

import mainVisual from '../../assets/main-visual.png';
import engarge from '../../assets/engarge.jpg';
import others from '../../assets/others.jpg';
import ring from '../../assets/ring.jpg';
import neckless from '../../assets/neckless.jpg';
import earrings from '../../assets/earrings.jpg';
import aboutme from '../../assets/about-me.jpg';
import beginning from '../../assets/beginning.jpg';
import carrer from '../../assets/carrer.jpg'
import products from '../../assets/products.jpg';

class Home extends Component {
    render() {
        return(
            <>
                {/* Main visual */}
                <section className='main-visual main-color'>
                    <div className='container'>
                        <div className='new-collection'>
                            <div className='collection-img'><img src={mainVisual} alt=""/></div>
                            <div className='collection-info second-color'>
                                <p>New</p>
                                <h1>elegant<br/>diamond ring</h1>
                                <Link to='' >Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Chapitredeux */}
                <section className='container about-chapiterdeux'>
                    <h2>About Chapitredeux<span className='title-span'>texttexttexttexttext</span></h2>
                    <ul className='row'>
                        <li className='col-md-6'>
                            <Link>
                                <img src={engarge} alt=''/>
                            </Link>
                        </li>
                        <li className='col-md-6 second-collection-link'>
                            <ul>
                                <li>
                                    <Link>
                                        <img src={others} alt=""/>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img src={ring} alt=""/>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className='col-md-6'>
                            <Link><img src={neckless} alt=""/></Link>
                        </li>
                        <li className='col-md-6'>
                            <Link><img src={earrings} alt=""/></Link>
                        </li>
                    </ul>
                </section>
                {/* About me */}
                <section className='about-me main-color'>
                    <div className='container'>
                        <ul>
                            <li>
                                <p>ABOUT ME</p>
                                <h3>I’m a trendy<br/>jewelry designer</h3>
                            </li>
                            <li>
                                <img src={aboutme} alt=""/>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* chapiterdeux infomation */}
                <section className='chapiterdeux-infomation'>
                    <div className='container'>
                        <ul className='row'>
                            <li className='col-md-7'>
                                <h3>Beginning</h3>
                                <p>texttexttexttexttext</p>
                            </li>
                            <li className='col-md-5'>
                                <img src={beginning} alt=""/>
                            </li>
                        </ul>
                        <ul className='row'>
                            <li className='col-md-7 order-md-2'>
                                <h3>Beginning</h3>
                                <p>texttexttexttexttext</p>
                            </li>
                            <li className='col-md-5 order-md-1'>
                                <img src={carrer} alt=""/>
                            </li>
                        </ul>
                        <ul className='row'>
                            <li className='col-md-7'>
                                <h3>Beginning</h3>
                                <p>texttexttexttexttext</p>
                            </li>
                            <li className='col-md-5'>
                                <img src={products} alt=""/>
                            </li>
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;