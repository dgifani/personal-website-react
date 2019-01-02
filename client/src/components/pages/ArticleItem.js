import React, { Component } from 'react';

class ArticleItem extends Component {

  render() {

    const {item} = this.props;
    return (
      <div className="card">
        <h3><a href={item.link} target="_blank"  rel="noopener noreferrer"> {item.title} </a></h3>
        <div>
         <h4> tags:  {item.category.map((cat, i) => <span key={i}>{cat + " "}</span>)} </h4>
        </div> 
        <h4>Published on:  {item.pubDate}</h4>
      </div>
    );
  }
}

export default ArticleItem;
