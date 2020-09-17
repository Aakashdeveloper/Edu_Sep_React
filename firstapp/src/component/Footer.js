import React from 'react';

const Footer = (props) => {
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h4>&copy; DeveloperFunnel {props.year} {props.month} </h4>
            </center>
        </React.Fragment>
    )
}

export default Footer;