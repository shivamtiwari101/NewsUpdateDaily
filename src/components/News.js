import React,{Component} from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component{
    
     static defualtProps={
     country:'in',
     pageSize:8,
     category:'general',
     }
static propTypes={
   country:propTypes.string,
   pageSize:propTypes.number,
  category:propTypes.string,
}
 capitalizeFirstLetter=(string)=>{
   return string.charAt(0).toUpperCase()+string.slice(1);
}
        constructor(props){
        super(props);
        
         this.state={
         articles:[ ],
         loading:true,
         page:1,
          totalResults:0
      
        }
document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsUpdate`;
     }
 async updateNews(){
  this.props.setProgress(10);
  const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category
=${this.props.category}`;
              this.setState({loading:true});
          let data=await fetch(url);
    let pData=await data.json();
       this.setState({articles:pData.articles,totalResults:pData.totalResults,loading:false});
 this.props.setProgress(100);
}
   async componentDidMount(){
       this.updateNews();     
}
    handlePrevClick=async()=>{
   this.setState({page:this.state.page-1});
 
       this.updateNews();

 }
handleNextClick=async()=>{
this.setState({page:this.state.page+1});
this.updateNews();

 
 }
fetchMoreData =async() => {
 this.setState({page:this.state.page+1});
   const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category
=${this.props.category}`;
             
          let data=await fetch(url);
    let pData=await data.json();
       this.setState({
                articles:this.state.articles.concat(pData.articles),totalResults:pData.totalResults});
    
  };

    render(){
 
     return(
             <>
           <h1 className="text-center" style={{margin:'50px 0px'}}><span className='text-primary'>NewsHant</span>-Top {this.capitalizeFirstLetter(this.props.category)}  News</h1><hr/>
          {this.state.loading &&<Loader/>}
             <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Loader/>}
        >  <div className="container">
             <div className="row">
            {this.state.articles.map((element)=>{
            return(   <div className="col-md-4" key={element.url}>
           <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} 
imageurl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                   </div>);
            })}
      
            </div>
</div>
      </InfiniteScroll>
              {/*<div className="container d-flex justify-content-between">
              <button className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&larr;Prev</button>
             <button className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page+1>Math.ceil(this.state.totalResults/10)}>
Next&rarr;</button>
 
             </div>*/}
              
               
           </>
          )
    }
}