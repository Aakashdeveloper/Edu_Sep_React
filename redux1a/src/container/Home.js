import React,{Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions';
import PropTypes from 'prop-types';
import DisplayComponent from '../component/DisplayMovies';

class Home extends Component {
    componentDidMount(){
        this.props.dispatch(moviesList())
    }

    render(){
        return (
            <div>
                <DisplayComponent datalist = {this.props.mydata}/>
            </div>
        )
    }

}

//Help to recvive the updated state from the store
function mapStateToProps(state){
    return {
        mydata:state.Films
    }
}

Home.protoTypes= {
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home)