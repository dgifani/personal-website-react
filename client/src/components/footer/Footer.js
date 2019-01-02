import React, {Component} from 'react';
import GitHub from 'react-icons/lib/fa/github'
import Twitter from 'react-icons/lib/fa/twitter'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import Email from 'react-icons/lib/md/email'

class Footer extends Component {
    render(){
        return(
            <footer>
            <h2>Let's Keep in Touch!</h2>            
            <div >
                <a href="mailto:example@example.com" className="social" ><Email/></a>
                <a href="https://twitter.com/yourID" className="social" target="_blank" rel="noopener noreferrer"><Twitter/></a>
                <a href="https://www.linkedin.com/in/yourID/" className="social" target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
                <a href="https://github.com/yourID/" className="social" target="_blank" rel="noopener noreferrer"><GitHub/></a> 
            </div>
          
            <p>Copyright 2019. Developed by React</p>
          </footer>
        )
    }
}

export default Footer