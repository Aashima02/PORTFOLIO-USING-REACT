# PORTFOLIO USING REACT

## PORTFOLIO.JS

```java
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
```

## STYLE.CSS

```java
body{
    margin: 0%;
}
header {
    height: 712px;
    width: 100vw;
    background: rgb(156, 115, 61);
    overflow: hidden;
}

#banner {
   object-fit: cover;
   opacity: 0.5;
}

.menubar{
    position: absolute;
    color: #ffffff;
    font-family: Garamond, serif;
    font-size:x-large;
    top: 0%;   
    font-weight: 300;
    cursor: pointer;
}

.m1{
    left:25%;
}

.m2{
    left: 37%;
}

.m3{
    left: 55%;
}

.m4{
    left: 68%;
}
#name{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-family: Garamond, serif;
    font-size: 610%;
}

#info{
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 200%;
}

.myinfo{
    height: 712px;
    width: 100vw;
    background: rgb(232, 223, 197);
}

.container{
    display: block;
    width: 70%;
    background-color: rgb(255, 255, 255);
    height: 70%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
}

#study{
    border-radius: 80px;
}

#title{
    position: absolute;
    top: 130%;
    left: 43%;
    font-size: 23px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    color: #605e5e;
}

#description
{
    position: absolute;
    top: 137%;
    left: 43%;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(134, 119, 79);
}

#title2{
    position: absolute;
    top: 150%;
    left: 43%;
    font-size: 23px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    color: #605e5e;
}

#description2
{
    position: absolute;
    top: 157%;
    left: 43%;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(134, 119, 79);
}

.layer{
    display: block;
    width: 100%;
    background-color: #6f7ca3;
    top: 500%;
    height: 70%;
}

.box1{
    height: 50%;
    width: 20%;
    background-color: #ffffff;
}

.c1{
    top: 500%;
    margin-left: 10%;
}

.c2{
    margin-left: 30%;
}

.c3{
    margin-left: 50%;
    margin-top: -500px;
}

.c4{
    margin-left: 70%;
    margin-top: 2px;
}

.box2{
    height: 50%;
    width: 20%;
    background-color: #857f7f;
}

.c5{
    margin-left: 10%;
    margin-top: -250px;
}

.c6{
    margin-left: 30%;
    margin-top: -498px;
}

.c7{
    margin-left: 50%;
    margin-top: -2px;
}

.c8{
    margin-left: 70%;
    margin-top: -498px;
}

.c5:hover, .c6:hover, .c7:hover, .c8:hover {
    transition-duration: 0.1s;
    background-color: #6f7ca3;
}

.skill{
    color: #6f7ca3;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight:200;
    margin-left: 4%;
    font-size: x-large;
}

.des{
    color: #ffffff;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight:200;
    margin-left: 8%;
    margin-right: 8%;
    font-size: x-large;
}

.containersoft{
    display: block;
    width: 50%;
    background-color: #6f7ca3;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
}

#softskills{
    border-radius: 80px;
    margin-top: 2px;
}

#skillset{
    position: absolute;
    top: 317%;
    left: 50%;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    color: #d1cece;
}

#tasks{
    position: absolute;
    top: 325%;
    left: 50%;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 100;
    color: #d1cece;
}

.footer{
    display: block;
    width: 100%;
    background-color: #a29d9d;
    height: 100px;
    margin-top: 7%;
}

.frame{
    width: 1000px;
    /* border: 2px solid #ffffff; */
    margin-left: auto;
    margin-right: auto;
}

#contact{
    color: #ffffff;
    font-weight: bolder;
    font-size: 200%;
    padding-top: 0%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.button1{
    top: 10%;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 20px;
    background-color:rgb(232, 223, 197);
    border-radius:50px;
    color: #777474;
    border:none;
    font-family: sans-serif;
    font-weight: bold;
    cursor: pointer;
    left: 100%;
} 

.button1:hover {
    transition-duration: 0.1s;
    background-color: rgb(255, 255, 255);
    border: 3px solid rgb(232, 223, 197);
}
```

## APP.JS

```java
import React from 'react';
import Portfolio from './portfolio';

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
```

## OUTPUT:

![1](https://github.com/Aashima02/PORTFOLIO-USING-REACT/assets/93427086/68f30113-8421-435f-b50f-5fda1d1ef36f)



![2](https://github.com/Aashima02/PORTFOLIO-USING-REACT/assets/93427086/51ccb886-3238-4fb1-80a8-665c6f2b1e06)



![3](https://github.com/Aashima02/PORTFOLIO-USING-REACT/assets/93427086/cb5d61b7-967e-4e59-9c2c-69d988a4fc04)




![4](https://github.com/Aashima02/PORTFOLIO-USING-REACT/assets/93427086/1cfb9707-9a06-4b00-8a20-85f43b324910)




