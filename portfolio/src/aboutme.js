import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function AboutMe(){


    return(
        <div className="container-fluid">
              <div className="aboutmephoto">

              </div>
              <div className="half">
                    <h2>Prakhar Tripathi
                    <h6>Full-Stack Developer</h6>
                    </h2>
                    
                    <p className='sidebar-listItemText'>Hello! I'm Prakhar, a dedicated software developer with a passion for crafting efficient and innovative solutions to complex problems. I thrive in the world of code and enjoy turning ideas into reality.</p>

                            {/* With [X years/months] of experience in the software development industry, */}<p className='sidebar-listItemText'>I've had the opportunity to work on a variety of projects, ranging from web pages and web applications to backend systems. My expertise includes HTML & CSS,JS,React.JS,J2E,.NET,MySQL,DevOps,Git etc, and I'm always eager to embrace new challenges and technologies.</p> 

                            <p className='sidebar-listItemText'>I believe in the power of collaboration and open-source contributions, and I actively engage with the developer community to learn and share knowledge. When I'm not coding, you can find me exploring the latest tech trends, experimenting with personal projects, or watching animes and shows.</p> 

                            <p className='sidebar-listItemText'>I'm driven by a constant desire to learn, grow, and create meaningful software that makes a positive impact. If you have an exciting project or collaboration opportunity in mind, or simply want to connect and discuss tech, feel free to reach out. Let's code, innovate, and build a better digital world together!</p>

                            <div style={{border: "1px solid", display: "flex", placeItems: "center"}}>
                            <FontAwesomeIcon style={{height:"4vw",width:"4vw,",padding:"20px",marginLeft:"150px"}} icon={faEnvelope} />
                                <FontAwesomeIcon style={{height:"4vw",width:"4vw",textDecoration:"none",padding:"20px"}} icon={faLinkedin} />
                                 <FontAwesomeIcon style={{height:"4vw",width:"4vw",padding:"20px"}} icon={faGithub} />
                                 <FontAwesomeIcon style={{height:"4vw",width:"4vw",padding:"20px"}} icon={faSquareXTwitter} />
                                 <FontAwesomeIcon style={{height:"4vw",width:"4vw",padding:"20px"}} icon={faInstagram} />
                                 
                            </div>
                </div>  
        </div>
    );

}
export default AboutMe;