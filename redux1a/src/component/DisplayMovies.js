import React from 'react';

const DisplayComponent  = (props) => {
    const renderMovies = ({datalist}) => {
        if(datalist){
            return datalist.map((item,index) => {
                return(
                    <div key={index}>{item.name}</div>
                )
            })
        }
    }

    return(
        <div>
            <h1>Movies List</h1>
            {renderMovies(props)}
        </div>
    )
}

export default DisplayComponent;