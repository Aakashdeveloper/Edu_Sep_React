import React,{Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
  uri:'http://localhost:8600/graphql'
})

const GET_PRODUCTS=gql`
  query products($id:Int){
    product(id:$id){
      name,
      rating_text
    }
  }
`

class ProductDetails extends Component{
  constructor(){
    super()

    this.state={
      id:3
    }
  }


  render(){
    return(
      <div>
          <center>
              <Query query={GET_PRODUCTS} client={client} variables={{id:this.state.id}}>
                {({loading,error,data}) => {
                  if(loading) return <p>Loading.....</p>
                  if(error) return <p>Error While Fetching</p>
                  return(
                    <div>
                      <h2>{data.product.name}</h2>
                      <h2>{data.product.rating_text}</h2>
                    </div>
                  )
                }} 
              </Query>
          </center>
      </div>
    )
  }
}

ReactDOM.render(<ProductDetails/>,document.getElementById('root'))