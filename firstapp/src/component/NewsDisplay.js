import React from 'react';

const NewsList = (props) => {
    console.log("in news display",props)

    const renderList = props.newsdata.map((data) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <div>
           {renderList}
        </div>
    )
}

export default NewsList;
