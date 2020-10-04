import React from 'react';

function DisplayLocation(props) {
    console.log(props)
    
    const renderLocation = ({mydata}) => {
        if(mydata){
            return mydata.map((item) => {
                return(
                    <div>
                        {item.city_name}
                    </div>
                )
            }) 
        }
    }
    return(
        <div>
            <center>
                <h2>Location</h2>
            </center>
            {renderLocation(props)}
        </div>
    )
}


export default DisplayLocation;