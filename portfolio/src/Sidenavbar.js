import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import AboutMe from './aboutme';


function Sidebar(){
    // const {
    //     useState
    //   } = React;
      
        const [isShrinkView, setIsShrinkView] = useState(false);
        const [isDarkMode, setIsDarkMode] = useState(false);
        const handleSidebarView = () => {
          setIsShrinkView(!isShrinkView);
        }
        const handleThemeChange = () => {
          setIsDarkMode(isDarkMode);
          document.body.classList.toggle("dark");
        }
        const imageUrl = 'htmlcssimg.png';
        const htmlcssImage = {
            backgroundImage: `url(${imageUrl})`,
          };
        
        
    return(
     <div className="container-fluid">
             <div className={`sidebar-container${isShrinkView ? " shrink" : ""}`}>
      {/* Sidebar view toggle button */}
      <button
        className="sidebar-viewButton"
        type="button"
        aria-label={isShrinkView ? "Expand Sidebar" : "Shrink Sidebar"}
        title={isShrinkView ? "Expand" : "Shrink"}
        onClick={handleSidebarView}
      >
        {/* SVG icon for the toggle button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Sidebar content */}
      <div className="sidebar-wrapper">
        {/* Theme toggle */}
        <div className="sidebar-themeContainer">
          <label labelFor="theme-toggle" className={`sidebar-themeLabel${isDarkMode ? " switched" : ""}`}>
            <input
              className="sidebar-themeInput"
              type="checkbox"
              id="theme-toggle"
              onChange={handleThemeChange}
            />
            <div className="sidebar-themeType light">
              {/* Light mode icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sidebar-listIcon"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              <span className="sidebar-listItemText">Light</span>
            </div>

            <div className="sidebar-themeType dark">
              {/* Dark mode icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sidebar-listIcon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <span className="sidebar-listItemText">Dark</span>
            </div>
          </label>
        </div>

        {/* Sidebar navigation menu */}
        <ul className="sidebar-list">
          {/* Dashboard */}
          
          <Link to='/' style={{ textDecoration: 'none'}} > <li className="sidebar-listItem active">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sidebar-listIcon"
              >
                <rect x="3" y="3" rx="2" ry="2" className="sidebar-listIcon" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className="sidebar-listItemText">Dashboard</span>
            </a>
            
          </li></Link>

          <Link to='/about' style={{ textDecoration: 'none'}} ><li className="sidebar-listItem active">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sidebar-listIcon"
              >
                <rect x="3" y="3" rx="2" ry="2" className="sidebar-listIcon" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className="sidebar-listItemText">About Me</span>
            </a>
            
          </li></Link>

          <li className="sidebar-listItem active">
            <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/prakhar-tripathi-24253a118" target="_blank">
            <FontAwesomeIcon style={{height:"25px",width:"25px"}} icon={faLinkedin} /> &nbsp;
              <span className="sidebar-listItemText">LinkedIn</span>
            </a>
            
          </li>
          <li className="sidebar-listItem active">
            <a style={{textDecoration:"none"}} href="https://github.com/prakhart07/prakhart07.git" target="_blank">
            <FontAwesomeIcon style={{height:"25px",width:"25px"}} icon={faGithub} />&nbsp;
              <span className="sidebar-listItemText">GitHub</span>
            </a>
            
          </li>
          Projects

          <li className="sidebar-listItem active">
            <a style={{ textDecoration: 'none' }} href="https://web-it-new.vercel.app" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sidebar-listIconProject"
              >
                <rect x="3" y="3" rx="2" ry="2" className="sidebar-listIcon" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className="sidebar-listItemText">IT Website</span>
            </a>
            
          </li>
          <li className="sidebar-listItem active">
            <a style={{ textDecoration: 'none' }} href="https://femoungg.vercel.app/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sidebar-listIconProject"
              >
                <rect x="3" y="3" rx="2" ry="2" className="sidebar-listIcon" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className="sidebar-listItemText">Restaurant Website</span>
            </a>
            
          </li>
          <li className="sidebar-listItem active">
            <a style={{ textDecoration: 'none' }} href="https://horizontepolaris.com/en" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sidebar-listIconProject"
              >
                <rect x="3" y="3" rx="2" ry="2" className="sidebar-listIcon" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className="sidebar-listItemText">Horizontepolaris</span>
            </a>
            
          </li>
          <li className="sidebar-listItem active">
            <a style={{ textDecoration: 'none' }} href="https://shiksha-bharat-portal.vercel.app" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sidebar-listIconProject"
              >
                <rect x="3" y="3" rx="2" ry="2" className="sidebar-listIcon" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className="sidebar-listItemText">CDAC</span>
            </a>
            
          </li>

          <li className="sidebar-listItem active">
            <a href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sidebar-listIconProject"
              >
                <rect x="3" y="3" rx="2" ry="2" className="sidebar-listIcon" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className="sidebar-listItemText">PortFolio</span>
            </a>
            
          </li>

          {/* Other menu items */}
          {/* Inbox, Calendar, Activity, Settings */}
          {/* ... (similar structure) */}
        </ul>

        {/* Profile section */}
        <div className="sidebar-profileSection">
          {/* Profile image */}
          <img
            src="https://assets.codepen.io/3306515/i-know.jpg"
            width="40"
            height="40"
            alt="Monica Geller"
          />

          {/* Profile name */}
          <span>Prakhar Tripathi</span>
        </div>
      </div>
            </div>
            <div>

            <div className='introbar-container'>
                <div className="circle">
                    
                </div>
                <h2>Prakhar Tripathi</h2>
            </div>

            <div className="container">
            <div className='mainbar-container'>
     <div className="child-div"><h3><span className="shrink .sidebar-listItemText">FrontEnd</span></h3>
     <div className="container">
     {/* <div className="row"> */}
     <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="htmlcss-icon">
                            <div><text>HTML&CSS</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="javascript-icon">
                            <div><text>JavaScript</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="typescript-icon">
                            <div><text>TypeScript</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="react-icon">
                            <div><text>React.JS</text></div>
                        </div>
            </div>
     {/* </div> */}
     </div>      
     </div>

     <div className="child-div"><h3><span className="shrink .sidebar-listItemText">BackEnd</span></h3>
     <div className="container">
      {/* <div className="row"> */}
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="nodejs-icon">
                            <div><text>Node.Js</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="express-icon">
                            <div><text>Express.Js</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="java-icon">
                            <div><text>Java</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="dotnet-icon">
                            <div><text>MS.NET</text></div>
                        </div>
            </div>
      {/* </div> */}
     </div>
            
     </div>
     <div className="child-div"><h3><span className="shrink .sidebar-listItemText">Database</span></h3>
     <div className="container">
      {/* <div className="row"> */}
      <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="mysql-icon">
                            <div><text>MySQL</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="mssql-icon">
                            <div><text>MSSQL</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="mongodb-icon">
                            <div><text>MongoDB</text></div>
                        </div>
            </div>
      {/* </div> */}
     </div>
            
            
     </div>
     <div className="child-div"><h3><span className="shrink .sidebar-listItemText">Devops</span></h3>
     <div className="container">
      {/* <div className="row"> */}
      <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="aws-icon">
                            <div><text>AWS EC2</text></div>
                        </div>
            </div>
      <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="awsrds-icon">
                            <div><text>AWS RDS</text></div>
                        </div>
            </div>      
      <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="docker-icon">
                            <div><text>Docker</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="kubernetes-icon">
                            <div><text>Kubernetes</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="jenkins-icon">
                            <div><text>Jenkins</text></div>
                        </div>
            </div>
      {/* </div> */}
     </div>     
     </div>
      
     <div className="child-div"><h3><span className="shrink .sidebar-listItemText">Other</span></h3>
     <div className="container">
      {/* <div className="row"> */}
      <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="git-icon">
                            <div><text>Git</text></div>
                        </div>
            </div>
     <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="spring-icon">
                            <div><text>SpringBoot</text></div>
                        </div>
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="rest-icon">
                        <div><text>REST Api</text></div>
                        </div>
                        
            </div>
            <div className="col-sm" style={{width:"245px",margin:"5px",marginTop:"40px"}}>
                        <div className="bootstrap-icon">
                        <div><text>BootStrap</text></div>
                        </div>
                        
            </div>
      {/* </div> */}
     </div>
     </div>
                </div>
            </div>
            </div>
    </div>   
        
    );
}
export default Sidebar;