import React ,{ Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ReactGA from 'react-ga';

import MainMenu from './header/MainMenu'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Resume from './pages/Resume'
import Error404 from './pages/Error404'
import Footer from './footer/Footer';

ReactGA.initialize(process.env.GA);
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component{
  render(){
    return(
      <Router>
        <div className="site">
          <MainMenu/>
          <div className="site-content">
          <Switch>
            <Route name="home" exact path="/" component= {Home}/>
            <Route path="/about" component= {About}/>
            <Route path="/articles" component= {Articles}/>
            <Route exact path="/resume" component= {Resume}/>             
            <Route component = {Error404}/>
          </Switch>
          </div>
          <Footer></Footer>
        </div>                  
      </Router>
    )
  }
}        

export default App;
