import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collectionpage.styles.scss';

import delight from '../../assets/delight/delighters';
import thum1 from '../../assets/img/thum1.jpg';
import thum2 from '../../assets/img/thum2.jpg';
import thum3 from '../../assets/img/thum3.jpg';

class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [
                {
                    'id': 1,
                    'title': 'Lorem',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.',
                    'price': '400',
                    'imgUrl': thum1
                },
                {
                    'id': 2,
                    'title': 'Lorem',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.',
                    'price': '300',
                    'imgUrl': thum2
                },
                {
                    'id': 3,
                    'title': 'Lorem',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.',
                    'price': '500',
                    'imgUrl': thum3
                },
                {
                    'id': 4,
                    'title': 'Lorem',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.',
                    'price': '400',
                    'imgUrl': thum1
                },
                {
                    'id': 5,
                    'title': 'Lorem',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.',
                    'price': '300',
                    'imgUrl': thum2
                },
                {
                    'id': 6,
                    'title': 'Lorem',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.',
                    'price': '500',
                    'imgUrl': thum3
                },
                {
                    'id': 7,
                    'title': 'Lorem',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.',
                    'price': '400',
                    'imgUrl': thum1
                },
                {
                    'id': 8,
                    'title': 'Lorem',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.',
                    'price': '300',
                    'imgUrl': thum2
                },
                {
                    'id': 9,
                    'title': 'Lorem',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates voluptatibus, ratione voluptatum nisi, cumque, modi minus cum libero dolorem provident sapiente amet consequatur vero maxime quidem architecto ipsam nam.',
                    'price': '500',
                    'imgUrl': thum3
                }
            ]
        }
    }
    componentDidMount() {
        delight.init();
        document.querySelector('.hamburger').classList.remove('nav-open');
        document.querySelector('.global-nav').classList.remove('nav-open');
    }
    renderList() {
        return Object.values(this.state.datas).map(data => {
            return <CollectionItem key={data.id} data={data} />
        }
        )
    }
    render() {
        return(
            <section className='collection container'>
                <div className='row'>
                    <ul className='row collection-items col-md-9' data-delighter>
                        {this.renderList()}
                    </ul>
                    <ul className='col-md-2 category-list offset-md-1' data-delighter>
                        <li><Link>All</Link></li>
                        <li><Link>Ring</Link></li>
                        <li><Link>Necklace</Link></li>
                        <li><Link>Pierce </Link></li>
                        <li><Link>Engarge</Link></li>
                        <li><Link>Others</Link></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Collection;