import React from 'react';
import {Link} from 'react-router-dom';
import MyButton from './MyButton';

const Header = () => {
    return(
        <header>
            <div>
                <MyButton/>
                <Link to="/">Article Gallery</Link>
            </div>
        </header>
    )
}

export default Header;