import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
        <div className='body'>
         {/*############## BIO ############################*/}
            <section className="bio">
              <div className="content-wrap ">
                <img className="profile-img  column-narrow" src="images/avatar.png" alt="Danyal Gifany"></img> 
                <div className="column-wide">
                  <h1>Your Name</h1>
                  <h2>Your Position</h2>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
              </div>
            </section>
            
            <main>
            <section className="highlight">
                <div className="content-wrap">
                  <h2>Highlights</h2>
                      <ul>
                        <li>  ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt  </li> 
                        <li>  ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt</li>   
                    
                      </ul>                   
                 </div>
              </section>
                
            {/*############## WORK ############################*/}
              <section className="work">
                <div className="content-wrap">
                  <h2>Work Experience</h2>
                  <div className="column-narrow">
                    <h3>Position </h3>
                    <p>Company</p>
                    <p>date - Present</p>
                  </div>
                  <div className="column-wide">
                      <h4>Key contributions:</h4>
                      <ul>
                        <li>  ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt</li>                         
                      </ul>  
                  </div>
                </div>
              </section>
              {/*############## EDUCATION ###########################*/}
              <section className="education">
                <div className="content-wrap">
                  <h2>Education</h2>
                  <h3>University </h3>
                  <h4>Degree</h4>                
                </div>
              </section>
              {/*############## PROJECTS ############################*/}
              <section className="projects" id="projects">
                <div className="content-wrap">
                  <h2>Projects</h2>
                  <div className="card card-background">
                    <ul>
                      <li>Title</li>
                      <p>Description</p>
                      <p>Duration:</p>
                   </ul>
                  </div>          
               </div>            
              </section>
            </main>
          </div>   
         );
  }
}

export default Resume;
