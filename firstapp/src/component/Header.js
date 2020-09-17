import React,{Fragment,Component} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
        super()
        console.log("i am in constructor")
        this.state={
            title:'React First App',
            keyword:'User Text Here'
        }
    }

    handleChange=(event) => {
        this.setState({keyword:event.target.value?event.target.value:"User Text Here"})
        this.props.userText(event.target.value)
    }

    render(){
        //console.log("i am in render")
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input type="text" onChange={this.handleChange}/>
                    <div style={{color:'white'}}>{this.state.keyword}</div>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;