import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import delight from '../../assets/delight/delighters';
import './homepage.styles.scss';

import mainVisual from '../../assets/img/main-visual.png';
import engarge from '../../assets/img/engarge.jpg';
import others from '../../assets/img/others.jpg';
import ring from '../../assets/img/ring.jpg';
import neckless from '../../assets/img/neckless.jpg';
import earrings from '../../assets/img/earrings.jpg';
import aboutme from '../../assets/img/about-me.jpg';
import beginning from '../../assets/img/beginning.jpg';
import carrer from '../../assets/img/carrer.jpg'
import products from '../../assets/img/products.jpg';

class Home extends Component {
    componentDidMount() {
        delight.init();
        document.querySelector('.hamburger').classList.remove('nav-open');
        document.querySelector('.global-nav').classList.remove('nav-open');
    }
    render() {
        return(
            <>
                {/* Main visual */}
                <section className='main-visual main-color'>
                    <div className='container'>
                        <div className='new-collection'>
                            <div className='collection-img left' data-delighter><img src={mainVisual} alt=""/></div>
                            <div className='collection-info second-color right' data-delighter>
                                <p>New</p>
                                <h1>elegant<br/>diamond ring</h1>
                                <Link to='/collection/1' >Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Chapitredeux */}
                <section className='container about-chapiterdeux'>
                    <h2 className='fade-up' data-delighter>About Chapitredeux</h2>
                    <p className='fade-up' data-delighter>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.</p>
                    <ul className='row' data-delighter>
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
                        <ul data-delighter>
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
                        <ul className='row' data-delighter>
                            <li className='col-md-7'>
                                <h3>Beginning</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolore esse, iure consequatur iusto omnis, quasi repellendus adipisci dignissimos perferendis quos quaerat ipsa! Dolorum totam dicta ratione fuga, explicabo pariatur.
                                Corrupti rem iure tempora obcaecati itaque eum. Magni quia reprehenderit itaque molestias quisquam laborum assumenda dolorum consectetur explicabo sint similique, culpa harum, quis voluptate ab repellat, mollitia doloribus veritatis nemo?
                                Ullam ex nemo, excepturi molestiae earum rem quam error, molestias optio debitis dolor architecto esse quisquam. Aut molestiae assumenda eius similique perferendis laudantium exercitationem provident fugit. Ipsam et dolore quas.</p>
                            </li>
                            <li className='col-md-5'>
                                <img src={beginning} alt=""/>
                            </li>
                        </ul>
                        <ul className='row' data-delighter>
                            <li className='col-md-7 order-md-2'>
                                <h3>Carrer</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolore esse, iure consequatur iusto omnis, quasi repellendus adipisci dignissimos perferendis quos quaerat ipsa! Dolorum totam dicta ratione fuga, explicabo pariatur.
                                Corrupti rem iure tempora obcaecati itaque eum. Magni quia reprehenderit itaque molestias quisquam laborum assumenda dolorum consectetur explicabo sint similique, culpa harum, quis voluptate ab repellat, mollitia doloribus veritatis nemo?
                                Ullam ex nemo, excepturi molestiae earum rem quam error, molestias optio debitis dolor architecto esse quisquam. Aut molestiae assumenda eius similique perferendis laudantium exercitationem provident fugit. Ipsam et dolore quas.</p>
                            </li>
                            <li className='col-md-5 order-md-1'>
                                <img src={carrer} alt=""/>
                            </li>
                        </ul>
                        <ul className='row' data-delighter>
                            <li className='col-md-7'>
                                <h3>Products</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolore esse, iure consequatur iusto omnis, quasi repellendus adipisci dignissimos perferendis quos quaerat ipsa! Dolorum totam dicta ratione fuga, explicabo pariatur.
                                Corrupti rem iure tempora obcaecati itaque eum. Magni quia reprehenderit itaque molestias quisquam laborum assumenda dolorum consectetur explicabo sint similique, culpa harum, quis voluptate ab repellat, mollitia doloribus veritatis nemo?
                                Ullam ex nemo, excepturi molestiae earum rem quam error, molestias optio debitis dolor architecto esse quisquam. Aut molestiae assumenda eius similique perferendis laudantium exercitationem provident fugit. Ipsam et dolore quas.</p>
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