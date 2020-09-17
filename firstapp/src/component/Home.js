import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsList from './NewsDisplay';

class Home extends Component{

    constructor(props){
        super(props)

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    
    filterNews=(keyword)=>{
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header userText={(userinput) => {this.filterNews(userinput)}}/>
                <NewsList newsdata={this.state.filtered}/>
                <Footer year="2021" month="Sep"/>
            </React.Fragment>  
        )
    }

}

export default Home