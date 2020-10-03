import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {latestNews,articleNews,galleryNews} from '../actions';
import LatestNews from '../component/Home/LatestNews';
import ArticleDisplay from '../component/Home/ArticleNews';
import GalleryDisplay from '../component/Home/GalleryNews';

class Home extends Component {
    componentDidMount(){
        this.props.dispatch(latestNews());
        this.props.dispatch(articleNews());
        this.props.dispatch(galleryNews());
    }

    render(){
        return(
            <div>
                <LatestNews ldata={this.props.datalist.lNews}/>
                <ArticleDisplay adata={this.props.datalist.aNews}/>
                <GalleryDisplay gdata={this.props.gallerylist.gNews}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article,
        gallerylist: state.gallery
    }
}

Home.protoType={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)