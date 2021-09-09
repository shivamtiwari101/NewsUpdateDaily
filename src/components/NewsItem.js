import React,{Component} from "react";
import speaker from './speaker.svg';
import off from './off.svg';
export default class News extends Component{
 
   
      
  speackToText=(msg)=>{
               if(this.state.speaker==false){
                    window.speechSynthesis.resume();
                  
                 this.setState({speaker:true});
                  var speech=new SpeechSynthesisUtterance();
                       
                speech.lang = "en-US";
               speech.text =msg+"news is end";
               speech.volume=5;
              speech.rate=1;
              speech.pitch=1;                
             
                  window.speechSynthesis.speak(speech);
                }if(this.state.speaker==true){
                 window.speechSynthesis.pause();
              this.setState({speaker:false});  
         

                    }
          
          }
constructor(){
      
         super();
         this.state={speaker:false}
}
    render(){
   let {title,description,imageurl,newsUrl,author,date,source}=this.props;
     return(
         <div className="my-3">
                <div style={{display:'flex',justifyContent:'right',postion:'absolute',right:'0',}}>
<span className="badge rounded-pill bg-danger"> {source}</span>
       </div>
          <div className="card">
       
   
  <img src={! imageurl? "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/06/Will-the-Apple-Watch-Series-7-provide-a-reason-to-upgrade.jpg":imageurl} 
className="card-img-top" alt="..."/>
    
  <div className="card-body">

    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author?author:'unknow'} On {new Date(date).toGMTString()}</small></p>
     <a href={newsUrl} target="_blacnk" className="btn btn-primary btn-sm">ReadMore..</a>
    <button onClick={()=>this.speackToText(description)} className="btn btn-white btn-sm" style={{outline:'none',cursour:'pointer',float:'right'}}>
     {this.state.speaker?<img src={speaker}alt='img' height="40" width="40"/>:<img src={off} alt="not found"/>}</button>
     
  </div>
</div>
</div>
          )
    }
}