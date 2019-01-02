import React, { Component } from 'react';
import ArticleItem from './ArticleItem'
import fetch from 'isomorphic-fetch';

const API_URL_ARTICLE = "URL TO Fetch Conetct";

class Articles extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : null
    }
  }

  componentDidMount(){
  
    fetch(API_URL_ARTICLE, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: 'GET'})
    .then( (response) => response.json())
    .then(data => this.setState({data}))
  }

  render() {    
    
    const {data} = this.state;

    return (
      <div className="body">
        <div className="content-wrap">
          <div>    
            <h2>Articles</h2>  
            { data ? 
              <div >
                <h3> {data.title} </h3>
                <a href={data.link}  target="_blank" rel="noopener noreferrer"> See More</a>
                <h4>Stories:</h4>
              <span >{data.items.map((item, i) => {
                return <ArticleItem key = {i} item = {item} />
              })}
              </span>
              </div>  
              :  "Loading the stories from Medium..."
            }          
          </div>  
        </div>
      </div>
    );
  }
}

export default Articles;
