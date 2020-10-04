import React,{Component} from 'react';
const MyContext = React.createContext();

class MyProvider extends Component{
    state={
        city:'London',
        country:'UK'
    }

    render(){
        return(
            <MyContext.Provider value={{state:this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

class City extends Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <div>
                            <p>Hi To {context.state.city}</p>
                            <p>Hi To {context.state.country}</p>
                        </div>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

class City1 extends Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <div>
                            <p>Hi To 111 {context.state.city}</p>
                            <p>Hi To 111 {context.state.country}</p>
                        </div>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

function Country(){
    return(
        <div>
            <span> This is coming from country <City/></span>
            <span> This is coming from country 111 <City1/></span>
        </div>
    )
}

class ContextComponent extends Component{
    render(){
        return(
            <MyProvider>
                <p>This is Context Api</p>
                <Country/>
            </MyProvider>
        )
    }
}

export default ContextComponent;