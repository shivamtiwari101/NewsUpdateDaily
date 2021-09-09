import React,{Component} from "react";
import Navbar from './components/Navbar';
import News from'./components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component{
pageSize=12;
apiKey='e11f6198da884c39bc9915cbb2ba81c5';
state={
progress:0}
setProgress=(progress)=>{
 this.setState({progress:progress})
}
  render(){
      return(
          
          <div>
            
           <Router>
             <Navbar/>
             <LoadingBar
        color='#f11946' height={5}
        progress={this.state.progress}
      />

            <Switch>
             <Route exact path="/">
           <News setProgress={this.setProgress}  key='general' pageSize={this.pageSize}  category='general' country='in' apiKey={this.apiKey}/>
          </Route>
           <Route exact path="/business">
           <News setProgress={this.setProgress}   key='business' pageSize={this.pageSize}  category='business' country='in' apiKey={this.apiKey}/>
          </Route>
      <Route exact path="/entertainment">
           <News setProgress={this.setProgress}  key='entertainment' pageSize={this.pageSize}  category='entertainment' country='in' apiKey={this.apiKey}/>
          </Route>
 <Route exact path="/science">
           <News setProgress={this.setProgress}  key='science' pageSize={this.pageSize}  category='science' country='in' apiKey={this.apiKey}/>
          </Route>
 <Route exact path="/sports">
           <News setProgress={this.setProgress}   key='sports' pageSize={this.pageSize}  category='sports' country='in' apiKey={this.apiKey}/>
          </Route>
 <Route exact path="/technology">
           <News setProgress={this.setProgress}   key='technology' pageSize={this.pageSize}  category='technology' country='in' apiKey={this.apiKey}/>
          </Route>
          <Route exact path="/health">
           <News setProgress={this.setProgress}   key='health' pageSize={this.pageSize}  category='health' country='in' apiKey={this.apiKey}/>
          </Route>
          
        </Switch>
       </Router>
            
           </div>
          )
    }
}