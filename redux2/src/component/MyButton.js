import React from 'react';

class MyButton extends React.Component {
    constructor(){
        super()

        this.state={
            name:''
        }
    }

    onButtonClick = () => {
        this.setState({name:'SomeThing'})
    }

    render(){
        return(
            <div>
                <button className="mybutton" onClick={this.onButtonClick}>
                    {this.state.name}
                </button>
            </div>
        )
    }
}

export default MyButton;
