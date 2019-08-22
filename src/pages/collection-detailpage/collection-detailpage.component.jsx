import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component';

import './collection-detailpage.styles.scss';

import delight from '../../assets/delight/delighters';

import mainDetail from '../../assets/img/detail.jpg';
import detail01 from '../../assets/img/detail01.jpg';
import detail02 from '../../assets/img/detail02.jpg';
import detail03 from '../../assets/img/detail03.jpg';

class CollectionDetail extends React.Component {
    componentDidMount() {
        delight.init();
        document.querySelector('.hamburger').classList.remove('nav-open');
        document.querySelector('.global-nav').classList.remove('nav-open');
    }
    render() {
        return (
            <>
            <section className='main-visual'>
                <div className='container'>
                    <div className='row no-gutters bg-second-color'>
                        <img className='col-md-8 left' src={mainDetail} alt="" data-delighter/>
                        <div className='col-md-4 collection-detail-info right' data-delighter>
                            <div>
                                <h2 className='text-left'>Collection name</h2>
                                <p>$400</p>
                                <dl>
                                    <dt>Quantity</dt>
                                    <dd><input className='text-right' value='1' type="text"/></dd>
                                </dl>
                                <CustomButton>Add Cart</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='description-content'>
                <div className='container'>
                    <dl data-delighter>
                        <dt>Description</dt>
                        <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.</dd>
                    </dl>
                    <dl data-delighter>
                        <dt>Shipping</dt>
                        <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.</dd>
                    </dl>
                    <ul className='row' data-delighter>
                        <li className='col-md-8'><img src={detail01} alt=""/></li>
                        <li className='col-md-4'>
                            <ul>
                                <li><img src={detail02} alt=""/></li>
                                <li><img src={detail03} alt=""/></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='related-collection bg-gray'>
                <div className='container'>
                    <h2 className='text-left fade-up' data-delighter>Related Collection</h2>
                    <ul className='row' data-delighter>
                        <li className='col-md-3'>
                            <Link><img src={detail02} alt=""/></Link>
                        </li>
                        <li className='col-md-3'>
                            <Link><img src={detail02} alt=""/></Link>
                        </li>
                        <li className='col-md-3'>
                            <Link><img src={detail02} alt=""/></Link>
                        </li>
                        <li className='col-md-3'>
                            <Link><img src={detail02} alt=""/></Link>
                        </li>
                    </ul>
                    <p className='text-right fade-up' data-delighter><Link to='/collection'>Back to Collections</Link></p>
                </div>
            </section>
            </>
        )
    }
    
}

export default CollectionDetail;