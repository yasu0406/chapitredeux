import React from 'react';
import { Link } from 'react-router-dom';
const CollectionItem = ({data}) => {
    const {id, title, imgUrl, price } = data;
    return (
        <>
            <li className='col-md-4'>
                <Link to={`/collection/${id}`}>
                    <img src={imgUrl} alt=""/>
                    <div className='row no-gutters'>
                        <h3 className='col-10'>{title}</h3>
                        <p className='col-2 text-right'>${price}</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CollectionItem;