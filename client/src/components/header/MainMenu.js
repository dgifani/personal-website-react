import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import FaHome from 'react-icons/lib/fa/home'

class MainMenu extends Component{
    render(){
        return(
            <header>
                <nav className="nav">
                    <Link to="/" activeclassname="active"  className="link"><FaHome/></Link>
                    <Link to="about" activeclassname="active" className="link">About</Link>
                    <Link to="articles" activeclassname="active" className="link">Articles</Link>
                    <Link to="resume" activeclassname="active" className="link">Resume</Link>        
                </nav>
            </header>              
        )
    }
}
export default MainMenu