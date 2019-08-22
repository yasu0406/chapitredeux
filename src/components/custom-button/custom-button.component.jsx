import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children}) => (
    <>
        <button className='btn custom-button'>{children}</button>
    </>
);

export default CustomButton;