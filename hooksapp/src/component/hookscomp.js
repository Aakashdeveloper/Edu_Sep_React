import React,{useState,useEffect} from 'react';
import DisplayLocation from './displayLocation';

var url = "https://developerfunnel.herokuapp.com/location"

function Hooks(){
    const [title] = useState('Developer Funnel');
    const [topic] = useState('Hooks Component');
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const [location,setlocation] = useState()

    useEffect(() => {
        fetch(url)
        .then((res)=>res.json())
        .then((data) => {
            setlocation(data)
        })
    })

    return( 
        <div>
            <h2>React Hooks</h2>
            <h3>{title}</h3>
            <h3>{topic}</h3>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>
                Counter
            </button>
            <h2>{count1}</h2>
            <button onClick={()=>{setCount1(count1+1)}}>
                Counter
            </button>
            <DisplayLocation  mydata={location}/>
        </div>
    )
}

export default Hooks