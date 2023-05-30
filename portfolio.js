import React from 'react';
import './style.css';
import tp from './topbanner.png';
import myinfo from './myinfor.jpg';
import codeb from './codeblue.png';
import machineb from './machineblue.png';
import webdb from './webdblue.png';
import prodb from './prodblue.png';
import soft from './soft1.png';

const Portfolio = () => {
  return (
    <>
      <header>
        <img src={tp} id="banner" style={{ height: '100%', width: '100%' }} />
        <p className="menubar m1">Details</p>
        <p className="menubar m2">Technical Skillsets</p>
        <p className="menubar m3">Soft Skills</p>
        <p className="menubar m4">Connect</p>
        <h1 id="name">Aashima Nazreen</h1>
        <h4 id="info">just another AI developer in the making.</h4>
      </header>
      <div className="myinfo">
        <br /><br /><br /><br /><br /><br />
        <div className="container">
          <img src={myinfo} id="study" style={{ padding: '50px', height: '80%' }} />
          <p id="title">ABOUT ME: </p>
          <p id="description">Student in Artificial Intelligence & Machine Learning. Fast learner <br />and quite adaptable to the work environment. Looking forward to <br />take part in IoT related projects. </p>
          <p id="title2">OBJECTIVE: </p>
          <p id="description2">To secure a responsible career within a respectable company, so that I am <br />able to fully utilize my training skills and make contributions for the success <br />of the company.</p>
        </div>
      </div>
      <div className="myinfo">
        <br /><br /><br /><br /><br /><br />
        <div className="layer">
          <div className="box1 c1">
            <center>
              <br /><br /><br />
              <img src={codeb} className="icon" style={{ height: '70px', width: '70px' }} />
              <p className="skill">CODING</p>
            </center>
          </div>
          <div className="box1 c2">
            <center>
              <br /><br /><br />
              <img src={machineb} className="icon" style={{ height: '70px', width: '70px' }} />
              <p className="skill">CORE AREAS</p>
            </center>
          </div>
          <div className="box1 c3">
            <center>
              <br /><br /><br />
              <img src={webdb} className="icon" style={{ height: '80px', width: '80px' }} />
              <p className="skill">WEB DESIGN</p>
            </center>
          </div>
          <div className="box1 c4">
            <center>
              <br /><br /><br />
              <img src={prodb} className="icon" style={{ height: '70px', width: '70px' }} />
              <p className="skill">PRODUCT <br /> DEVELOPMENT</p>
            </center>
          </div>

          <div className="box2 c5">
            <center>
              <br /><br />
              <p className="des">Well learned in programming languages like Python, Java and C Programming</p>
            </center>
          </div>
          <div className="box2 c6">
            <center>
              <br /><br />
              <p className="des">Core areas of learning include Machine Learning, IoT, Data Science, Neural Networks, etc</p>
            </center>
          </div>
          <div className="box2 c7">
            <center>
              <br /><br />
              <p className="des">Confident in Web Design & Development, UI/UX Designs and Wireframe Creations</p>
            </center>
          </div>
          <div className="box2 c8">
            <center>
              <br /><br />
              <p className="des">Basic skills in Product Development including AutoCAD Fusion 360 & 3D Printing</p>
            </center>
          </div>
        </div>
      </div>
      <div className="myinfo">
        <br /><br />
        <div className="containersoft">
          <img src={soft} id="softskills" style={{ padding: '50px', height: '70%' }} />
          <p id="skillset">SOFT SKILLS:</p>
          <ul id="tasks">
            <li>Problem Solving Skills</li>
            <li>Time Management</li>
            <li>Creative</li>
            <li>Adaptability</li>
            <li>Inter Personal Skills</li>
            <li>Stress Management</li>
            <li>Critical Thinking</li>
          </ul>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div className="footer">
          <div className="frame">
            <p id="contact" style={{ paddingTop: '20px' }}>Connect With Me:</p>
            <a href="https://github.com/Aashima02"><button className="button1" style={{ marginLeft: '100px', marginRight: '100px' }}>GitHub</button></a>
            <a href="https://www.linkedin.com/in/aashima-nazreen-s-953074236/"><button className="button1" style={{ marginLeft: '100px', marginRight: '100px' }}>LinkedIn</button></a>
            <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=aashisayeed@gmail.com"><button className="button1" style={{ marginLeft: '100px', marginRight: '100px' }}>Gmail</button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

// import React from 'react';
// import './style.css'; // Import the CSS file

// function Portfolio() {
//   return (
//     <>
//       <nav className="navbar">
//         <ul>
//           <li><a href="#home">HOME</a></li>
//           <li><a href="#about">ABOUT ME</a></li>
//           <li><a href="#education">EDUCATION</a></li>
//           <li><a href="#portfolio">PORTFOLIO</a></li>
//           <li><a href="#contact">CONTACT ME</a></li>
//         </ul>
//       </nav>

//       <section id="home">
//         <h1 className="heading"> HI, I AM</h1>
//         <h1 className="heading"> MONISHA </h1>
//         <br />
//       </section>

//       <section id="about">
//         <h1 className="heading">ABOUT ME</h1>
//         <br />
//         <br />
//         <div className="about">
//           <img src="bg.jpg" alt="my pic" />
//           <div className="name">
//             <br />
//             <br />
//             <p>AI/ML specialists work with a range of data types...</p>
//           </div>
//         </div>
//       </section>

//       <section id="education">
//         <h1 className="heading">EDUCATION</h1>

//         <div className="columns">
//           <div className="box">
//             <h2>BACHELORS IN AIML</h2>
//             <p><i>Artificial Intelligence and Machine Learning which aims...</i></p>
//           </div>
//           <div className="box">
//             <h2>MASTERS IN AIML</h2>
//             <p><i>The Master of Artificial Intelligence in Business is a unique...</i></p>
//           </div>
//           <div className="box">
//             <h2>P.H.D IN AIML</h2>
//             <p><i>Earn a doctorate degree in Artificial Intelligence, help...</i></p>
//           </div>
//           <div className="box">
//             <h2>RESEARCH IN AIML</h2>
//             <p><i>A computer-generated simplification of something that exists...</i></p>
//           </div>
//         </div>
//       </section>

//       <section id="portfolio">
//         <h1 className="heading">PORTFOLIO</h1>
//         <div className="gallery">
//           <img src="img1.jpg" alt="" />
//           <img src="img2.jpg" alt="" />
//           <img src="img3.jpg" alt="" />
//         </div>
//       </section>

//       <section id="contact">
//         <h1 className="heading">CONTACT ME</h1>
//         <br />
//         <form action="" className="form">
//           <input type="text" name="name" className="input" placeholder="Enter Your name" />
//           <input type="text" name="email" className="input" placeholder="Enter Your Email" />
//           <textarea name="message" id="message" cols="70" rows="20" placeholder="Enter Your Message"></textarea>
//           <input type="submit" value="submit" id="submit" />
//         </form>
//       </section>
//     </>
//   );
// }

// export default Portfolio;