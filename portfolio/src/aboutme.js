import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import myImage from './Images/Prakhar.png';
// import 'bootstrap/dist/css/bootstrap.min.css';


function AboutMe(){


    return(
      <div>
        <div className="container border border-black">
          
            <div className='aboutmephoto'>
            <div className="name">
            <div className='desc'>
              <span>Education: PGD-Advance Computing,B.E.(Civil)</span>
              </div>
              <div className='desc'>
              <span>Alma mater: Sunbeam Pune(CDAC), RGPV(BE)</span>
              </div>
              <div className='desc'>
              <span>Current Company:IncubXperts,Pune(M.H.),India.</span>
              </div>
              <div className='desc'>
              <span>Designation: Software Engineer(MERN Stack)</span>
              </div>
            </div>
            </div>
              {/* <div className="row">
                <div className="col-sm mt-5"> 
                        <img src={myImage} alt="Description of the image" />
                </div>
                <div className='col-sm'>

                </div>
              </div> */}
              <div className="child-div">
                <div className="">
                <h2>Prakhar Tripathi
                    <h6>MERN-Stack Developer</h6>
                    </h2>
                    
                    <p>Hello! I'm Prakhar, a dedicated software developer with a passion for crafting efficient and innovative solutions to complex problems. I thrive in the world of code and enjoy turning ideas into reality.</p>

                            <p className=''>I've had the opportunity to work on a variety of projects, ranging from web pages and web applications to backend systems. My expertise includes C,C++,C#,HTML & CSS,JS,TS,React.JS,Node.Js,J2E,MS.NET,MySQL,Git,OS,DSA,DevOps etc, and I'm always eager to embrace new challenges and technologies.</p> 

                            <p>I believe in the power of collaboration and open-source contributions, and I actively engage with the developer community to learn and share knowledge. When I'm not coding, you can find me exploring the latest tech trends, experimenting with personal projects, or watching animes and shows.</p> 

                            <p className=''>Also doing freelancing projects with both fixed and hourly rate and delevring the projects in no time.</p>

                            <div className='row'>
                            <FontAwesomeIcon style={{height:"4vw",width:"4vw,",padding:"20px",marginLeft:"150px"}} icon={faEnvelope} href='' />
                                <FontAwesomeIcon style={{height:"4vw",width:"4vw",textDecoration:"none",padding:"20px"}} icon={faLinkedin} href='' />
                                 <FontAwesomeIcon style={{height:"4vw",width:"4vw",padding:"20px"}} icon={faGithub} href=''/>
                                 <FontAwesomeIcon style={{height:"4vw",width:"4vw",padding:"20px"}} icon={faSquareXTwitter} href='' />
                                 <FontAwesomeIcon style={{height:"4vw",width:"4vw",padding:"20px"}} icon={faInstagram} href='' />
                                 
                            </div>
                </div>
                   
                </div>  
        </div>
      </div>
    );

}
export default AboutMe;