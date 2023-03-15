import React, { Component } from 'react'
import NewsItem from './NewsItem'

export  class News extends Component {
    articals=[];
                
    constructor(){
        super();
        this.state={
            articals: this.articals,
            loading :false,
            page:1
            
        }
    }

    handlePrvClick = async () =>
    {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d1ddd1698f7d4fccb2c17c43e7ad4ad5&page=${this.state.page-1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articals:parseData.articles
        });
   
        this.setState({
            
            page: this.state.page - 1,
        })
    }
     handleNextClick= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d1ddd1698f7d4fccb2c17c43e7ad4ad5&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articals:parseData.articles
        });
   
        this.setState({
            
            page: this.state.page+1,
        })
    }
   async componentDidMount()
   {
 
      
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d1ddd1698f7d4fccb2c17c43e7ad4ad5";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articals:parseData.articles
        });
   
   }
  render() {


    return (

<div className="container my-3" >
        <h2>NewsAp- Top Headlines</h2>
        <div className="row my-2" >

        {this.state.articals.map((element)=>{
          return(
            <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""}  description = {element.description?element.description.slice(0,89):""} imageUrl={element.urlToImage}  newsUrl ={element.url}/>
        </div>
          )
        })}
        

    </div>
    <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" onClick={this.handlePrvClick} className="btn btn-dark"> &larr; Previous</button>
    <button type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>

    </div>
</div>

     
        

 
     
    )
  }
}

export default News
