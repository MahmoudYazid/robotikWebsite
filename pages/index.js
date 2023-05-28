import Image from "next/image"

import React, { useEffect ,useState} from 'react'
import { GrProductHunt } from 'react-icons/gr'
import { AiOutlineContacts, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { FcServices } from 'react-icons/fc'
import { FiBookOpen } from 'react-icons/fi'
import { SiCreatereactapp, SiJavascript, SiExpress } from 'react-icons/si'
import { BsFiletypeHtml } from 'react-icons/bs'
import { TbBrandNextjs, TbServerCog } from 'react-icons/tb'
import { GiCampingTent, GiCampfire } from 'react-icons/gi'
import { MdOutlineShapeLine } from 'react-icons/md'

import { FaNodeJs } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiPython, DiReact } from 'react-icons/di'

import { AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { MdWhatsapp } from 'react-icons/md'
import { BsPhoneVibrate, BsBackspace } from 'react-icons/bs'
import Link from 'next/link';
import { RiGooglePlayFill } from 'react-icons/ri';
import { redirect } from "./LeftSide/LeftSide"
import { Head } from "next/document"
const Contact =()=>{
  return(
    <div id='contact' className="  w-100 h-20  text-white  text-white bg-white grid grid-cols-[1fr] mt-3 ">

      <div className="w-full h-50 text-black justify-center text-white flex flex-row text-white flex-wrap cursor-pointer ">
        <div
          className="flex flex-col text-black m-5 hover:text-green-600 cursor-pointer"
          onClick={() => redirect("facebook")}
        >
          <AiOutlineFacebook size={50}></AiOutlineFacebook>
          <p>facebook</p>
        </div>
        <div
          className="flex flex-col text-black m-5 hover:text-green-600 cursor-pointer"
          onClick={() => redirect("youtube")}
        >
          <AiOutlineYoutube size={55}></AiOutlineYoutube>
          <p>Youtube</p>
        </div>
        <div
          className="flex flex-col text-black m-5 hover:text-green-600  cursor-pointer"
          onClick={() => redirect("whats")}
        >
          <MdWhatsapp size={55}></MdWhatsapp>
          Whats-App
        </div>
      
        <div className="flex text-black flex-col m-5 hover:text-green-600 cursor-pointer " onClick={() => redirect("googleplay")}>
          <RiGooglePlayFill size={50}> </RiGooglePlayFill>
          <p>Google play</p>
        </div>
      </div>


    </div>
  )
}

const Navbar=()=>{
  return(
    <div className="w-full h-50 justify-center text-white flex flex-row text-white bg-white mb-5 ">



      <Link href='#contact' className="flex flex-col m-5   h-20  text-black hover:text-green-600 cursor-pointer">
        <AiOutlineContacts size={50} ></AiOutlineContacts>
        <p>contact</p>
      </Link>

      <Link href='#pharmaclone' className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer">
        <GrProductHunt size={50} ></GrProductHunt>
        <p>products</p></Link>

      <Link href='#courses' className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer">
        <FiBookOpen size={50} ></FiBookOpen>
        <p>Courses</p></Link>
      <Link href='#AndroidServices' className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer">
        <FcServices size={50} ></FcServices>
        <p>services</p></Link>

    </div>
  )
}

const Pharmaclone=()=>{
  return(
    <div id='pharmaclone' className=" w-100 h-100  text-white  text-white bg-black  md:flex-row flex flex-col  justify-center text-center   mb-3 mt-10">
      <div className=" text-center flex flex-col text-center  text-white ">
        <h1 className="text-3xl font-bold visible ">Android pharmacy managment system</h1>
        <div className="w-12/12 text-lg w-100 mt-2  flex flex-row text-center justify-center align-center   text-white">
          <p className=" font-bold visible w-8/12 ">Our Pharmacy Management App is a powerful and intuitive mobile solution designed to streamline and enhance pharmacy operations. With our app, pharmacists and pharmacy staff can efficiently manage various aspects of
            their day-to-day tasks, improving productivity and customer service.</p>

        </div>
        
        <div className="w-12/12 text-lg w-50 mt-2 flex flex-row text-center justify-center align-center   text-white">
          <a href="https://play.google.com/store/apps/details?id=com.pharmaclonetrailer" className=" hover:underline w-3/12 text-lg mt-2 cursor-pointer rounded-lg text-green-500 ">
             Download it now

            
          </a>
        </div>
      </div>
      <Image src='/pharmaclone2.png' width={'500'} height={'500'} alt="sss" className="md:animate-pulse self-end h-full "></Image>



    </div>
  )
}

const AndroidService = () => {
  return (
    <div id='AndroidServices' className="  ltr:pl-4 w-100 h-100  text-white  text-black bg-white  md:flex-row flex flex-col  justify-center text-center   mb-3 mt-10">
      <Image src='/androidmade2.png' width={'500'} height={'500'} alt="sss" className="md:animate-pulse self-end h-full "></Image>


      <div className=" text-center flex flex-col text-center  text-black ">
        <h1 className="text-3xl font-bold visible ">We make your Android Apps</h1>
        <div className="w-12/12 text-lg w-100 mt-2  flex flex-row text-center justify-center align-center   text-black">
          <p className=" font-bold visible w-8/12 ">Our team specializes in creating exceptional Android apps tailored to meet your specific needs. With our Android app development services, we bring your ideas to life and provide you with a powerful tool to engage and connect with
           your target audience on the world's most popular mobile platform.</p>

        </div>

        <div className="w-12/12 text-lg w-50 mt-2 flex flex-row text-center justify-center align-center   text-white">
          <a onClick={() => redirect("whats")} className=" hover:underline w-7/12 text-lg mt-2 cursor-pointer rounded-lg text-green-500 ">
            contact With Us Now Via WhatApp


          </a>
        </div>
      </div>
     

    </div>
  )
}
const WebsiteService = () => {
  return (
    <div id='WebsitesServices' className="  ltr:pl-4 w-100 h-100  text-white  text-black bg-black  md:flex-row flex flex-col  justify-center text-center   mb-3 mt-10">
     

      <div className=" text-center flex flex-col text-center  text-white ">
        <h1 className="text-3xl font-bold visible mt-2 ">We will make your website</h1>
        <div className="w-12/12 text-lg w-100 mt-2  flex flex-row text-center justify-center align-center   text-white">
          <p className=" font-bold visible w-8/12 ">Our team specializes in creating exceptional Android apps tailored to meet your specific needs. With our Android app development services, we bring your ideas to life and provide you with a powerful tool to engage and connect with
            your target audience on the world's most popular mobile platform.Our dedicated team of Android app developers is passionate about turning your vision into a reality. We understand that every business has unique requirements, and that's why we take a personalized approach to each project. By closely collaborating with you, we ensure that your Android app reflects your brand identity and fulfills your specific goals.

            Our Android app development services cover a wide range of industries and functionalities.</p>


        </div>

        <div className="w-12/12 text-lg w-50 mt-2 flex flex-row text-center justify-center align-center   text-white">
          <a onClick={() => redirect("facebook")} className=" mb-3 hover:underline w-7/12 text-lg mt-2 cursor-pointer rounded-lg text-green-500 ">
            contact With Us Now Via facebook


          </a>
        </div>
      </div>
      <Image src='/454734-PF8Y36-312.jpg' width={'600'} height={'500'} alt="sss" className=" md:animate-pulse self-end h-full "></Image>



    </div>
  )
}

const CoursesService = () => {
  return (
    <div id='courses' className="ltr:pl-4 w-100 h-100  text-white  text-black bg-white  md:flex-row flex flex-col  justify-center text-center   mb-3 mt-10">
      <Image src='/robotikacademy2.png' width={'500'} height={'500'} alt="sss" className="md:animate-pulse self-end h-full "></Image>


      <div className=" text-center flex flex-col text-center  text-black ">
        <div className="w-full h-50 justify-center text-white flex flex-row flex-wrap text-white bg-white ">



          <div  className="flex flex-col m-5   h-20  text-black hover:text-green-600 cursor-pointer text-center">
            <DiPython size={100} ></DiPython>
            <p>Basics Course</p>
          </div>

          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center">
            <DiReact size={100} ></DiReact>
            <p>react Js</p>
          </div>

          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center">
            <BsFiletypeHtml size={100} ></BsFiletypeHtml>
            <p>html</p></div>
          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center ">
            <AiFillHtml5 size={100} ></AiFillHtml5>
            <p>css</p></div>

          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center ">
            <SiCreatereactapp size={100} ></SiCreatereactapp>
            <p>react native</p></div>
          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center ">
            <SiJavascript size={100} ></SiJavascript>
            <p>Javascript</p></div>
          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center ">
            <SiExpress size={100} ></SiExpress>
            <p>express Js</p></div>

          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center ">
            <FaNodeJs size={100} ></FaNodeJs>
            <p>Node js</p></div>

          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center ">
            <TbBrandNextjs size={100} ></TbBrandNextjs>
            <p>Next Js</p></div>

          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center ">
            <GiCampingTent size={100} ></GiCampingTent>
            <p>Full-stack camp</p></div>
          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center ">
            <MdOutlineShapeLine size={100} ></MdOutlineShapeLine>
            <p>Frontend camp</p></div>
          <div className="flex flex-col m-5  h-20  text-black hover:text-green-600 cursor-pointer text-center ">
            <TbServerCog size={100} ></TbServerCog>
            <p>Backend camp</p></div>

        </div>

        <div className="w-12/12 text-lg w-50 mt-2 flex flex-row text-center justify-center align-center   text-white">
          <a onClick={() => redirect("whats")} className=" hover:underline w-7/12 text-lg mt-2 cursor-pointer rounded-lg text-green-500 ">
            contact With Us Now and enroll your name Via WhatApp


          </a>
        </div>
      </div>


    </div>
  )
}
const lI=(data)=>{
  return(
    <li>{data}</li>
  )
}

const AskAboutTheCurculums = () => {
  const [selectedcourse, setselectedcourse]=useState('start')
  const [coursesSate, setcoursesSate] = useState({
    start:'Choose Course',
    html: <ul><li>Introduction to HTML</li><li>HTML Tags and Elements<ol><li>Headings and Paragraphs</li><li>Links and Images</li><li>Lists and Tables</li><li>Forms and Input Fields</li><li>Divs and Spans</li></ol></li><li>HTML Attributes and Values</li><li>HTML Forms and Input Validation</li><li>HTML5 Semantic Elements</li><li>HTML5 Audio and Video</li><li>Introduction to JavaScript and DOM Manipulation</li><li>Introduction to Server-Side Programming and Database Integration</li><li>Project Development and Deployment</li></ul>,
    javascript: <ul><li>Introduction to JavaScript</li><li>Data Types and Variables</li><li>Operators and Expressions</li><li>Control Flow (Conditional Statements and Loops)</li><li>Arrays and Objects</li><li>Functions</li><li>Scope and Closures</li><li>DOM Manipulation and Events</li><li>Asynchronous JavaScript (Promises, async/await)</li><li>Modules and Modular JavaScript</li><li>ES6+ Features (Arrow Functions, Classes, Modules, etc.)</li><li>Error Handling and Debugging</li><li>HTTP and AJAX</li><li>Introduction to React</li><li>State Management (Redux, Context API)</li><li>API Integration</li><li>Testing JavaScript Applications</li><li>Build Tools (Webpack, Babel)</li><li>Deployment and Hosting</li></ul>,
    reactjs: <ol><li>Introduction to React</li><li>React Components and JSX</li><li>State and Props</li><li>Handling Events</li><li>Conditional Rendering</li><li>List Rendering</li><li>Forms and User Input</li><li>Component Lifecycle</li><li>React Hooks</li><li>React Router</li><li>Managing State with Redux</li><li>API Integration with Axios</li><li>Error Handling and Validation</li><li>Testing React Applications</li><li>Styling in React (CSS-in-JS, Styled Components)</li><li>Server-Side Rendering with Next.js</li><li>Performance Optimization</li><li>Deployment and Hosting</li></ol>,
    reactnative: <ol><li>Introduction to React Native</li><li>React Native Components</li><li>Styling in React Native</li><li>Layouts and Flexbox</li><li>Handling User Input</li><li>Navigation and Routing</li><li>Data Fetching and API Integration</li><li>Working with Device Features (Camera, Geolocation, etc.)</li><li>Handling State and Props in React Native</li><li>Managing Data and State with Redux</li><li>Handling Forms and Validation</li><li>Working with Native Modules and Libraries</li><li>Debugging and Error Handling in React Native</li><li>Performance Optimization</li><li>Testing React Native Applications</li><li>Building and Deploying React Native Apps</li><li>Advanced Topics (Animation, Push Notifications, etc.)</li><li>Working with Backend Services</li><li>App Store Submission and Release</li></ol>,
    css: <ol><li>CSS Basics</li><li>Selectors and Specificity</li><li>Box Model and Layout</li><li>Typography and Fonts</li><li>Colors and Backgrounds</li><li>CSS Units and Measurements</li><li>CSS Flexbox</li><li>CSS Grid</li><li>Responsive Design</li><li>Transitions and Animations</li><li>Transforms and 2D/3D Effects</li><li>CSS Preprocessors (e.g., Sass, Less)</li><li>CSS Methodologies (e.g., BEM, SMACSS)</li><li>CSS Frameworks (e.g., Bootstrap, Tailwind CSS)</li><li>CSS Architecture and Organization</li><li>CSS Performance Optimization</li><li>CSS Debugging and Browser Compatibility</li><li>CSS3 Features and Advanced Techniques</li><li>CSS in Modern Web Development</li><li>CSS Best Practices and Coding Standards</li></ol>,
    basic: <ol><li>Introduction to Programming</li><li>Variables and Data Types</li><li>Control Structures (Conditional Statements and Loops)</li><li>Functions and Procedures</li><li>Arrays and Lists</li><li>String Manipulation</li><li>File Input/Output</li><li>Exception Handling</li><li>Object-Oriented Programming</li><li>Classes and Objects</li><li>Inheritance and Polymorphism</li><li>Recursion</li><li>Sorting and Searching Algorithms</li><li>Data Structures (Stacks, Queues, Linked Lists, etc.)</li><li>Algorithmic Problem Solving</li><li>Introduction to Databases</li><li>Web Development Basics (HTML, CSS, JavaScript)</li><li>Debugging and Error Handling</li><li>Version Control with Git</li><li>Software Development Lifecycle</li></ol>,
    express: <ol><li>Introduction to Express.js</li><li>Routing and Middleware</li><li>Handling HTTP Requests and Responses</li><li>Working with Express Templates</li><li>Creating RESTful APIs</li><li>Authentication and Authorization</li><li>Error Handling and Validation</li><li>Database Integration (e.g., MongoDB, MySQL)</li><li>Sessions and Cookies</li><li>File Upload and Download</li><li>Express.js and Front-end Frameworks (e.g., React, Angular)</li><li>Deploying Express.js Applications</li><li>Security Best Practices</li><li>Caching and Performance Optimization</li><li>Testing and Debugging Express.js Applications</li><li>Logging and Error Tracking</li><li>Real-time Communication with WebSockets</li><li>Server-Side Rendering</li><li>API Documentation and Swagger Integration</li><li>Scaling and Load Balancing</li></ol>,
    node: <ol><li>Introduction to Node.js</li><li>Node.js Modules and NPM</li><li>Asynchronous Programming with Callbacks</li><li>Promises and Async/Await</li><li>Working with File System</li><li>HTTP Servers and Clients</li><li>Express.js Framework</li><li>Working with Databases (e.g., MongoDB, MySQL)</li><li>Authentication and Authorization</li><li>Middleware and Routing</li><li>Error Handling and Validation</li><li>Real-time Communication with WebSockets</li><li>Testing and Debugging Node.js Applications</li><li>Stream and Buffer</li><li>Working with RESTful APIs</li><li>Security and Best Practices</li><li>Caching and Performance Optimization</li><li>Deployment and Scalability</li><li>Background Jobs and Task Scheduling</li><li>Serverless Architecture with AWS Lambda</li></ol>,
    next: <ol><li>Introduction to Next.js</li><li>Setting up Next.js Project</li><li>Pages and Routing</li><li>Server-Side Rendering (SSR)</li><li>Static Site Generation (SSG)</li><li>Data Fetching in Next.js</li><li>Dynamic Routes and URL Parameters</li><li>Layouts and Components</li><li>Styling in Next.js</li><li>Working with APIs</li><li>Authentication and Authorization</li><li>Internationalization (i18n)</li><li>Error Handling and Error Pages</li><li>Optimizing Performance in Next.js</li><li>SEO and Metadata Configuration</li><li>Deployment and Hosting</li><li>Testing Next.js Applications</li><li>Serverless Functions in Next.js</li><li>Working with External Libraries and Modules</li><li>Next.js and Content Management Systems (CMS)</li></ol>,
    backend: <ol><li>Node js full course</li><li>Html</li><li>css</li><li>javascript</li><li>express js</li><li>Mongodb</li></ol>,
    frontend: <ol><li>next js</li><li>react js full course</li><li>Html</li><li>css</li><li>javascript</li><li>tailwind</li></ol>,
    fullstack: <ol><li>next js</li><li>react js full course</li><li>Html</li><li>css</li><li>javascript</li><li>tailwind</li><li>Node js full course</li><li>express js</li><li>Mongodb</li></ol>,
  });

  return (
    <div id='courses' className="ltr:pl-4 w-100 h-100  text-white  text-black bg-black  md:flex-row flex flex-col  justify-center text-center   mb-3 mt-10">
     


      <div className=" text-center flex flex-col text-center  text-white flex-1">
        <div className="w-full h-50 justify-center text-white flex flex-row flex-wrap text-white bg-black ">



          <div onClick={() => { setselectedcourse('basic') }}  className="flex flex-col m-5   h-20  text-white hover:text-green-600 cursor-pointer text-center">
            <DiPython size={100} ></DiPython>
            <p>Basics Course</p>
          </div>

          <div onClick={() => { setselectedcourse('reactjs') }} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center">
            <DiReact size={100} ></DiReact>
            <p>react Js</p>
          </div>

          <div className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center" onClick={()=>{setselectedcourse('html')}}>
            <BsFiletypeHtml size={100} ></BsFiletypeHtml>
            <p>html</p></div>
          <div onClick={() => { setselectedcourse('css') }} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
            <AiFillHtml5 size={100} ></AiFillHtml5>
            <p>css</p></div>

          <div onClick={() => { setselectedcourse('reactnative') }} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
            <SiCreatereactapp size={100} ></SiCreatereactapp>
            <p>react native</p></div>
          <div onClick={() => { setselectedcourse('javascript') }} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
            <SiJavascript size={100} ></SiJavascript>
            <p>Javascript</p></div>
          <div onClick={() => { setselectedcourse('express') }} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
            <SiExpress size={100} ></SiExpress>
            <p>express Js</p></div>

          <div onClick={() => { setselectedcourse('node') }}  className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
            <FaNodeJs size={100} ></FaNodeJs>
            <p>Node js</p></div>

          <div onClick={() => { setselectedcourse('next') }}  className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
            <TbBrandNextjs size={100} ></TbBrandNextjs>
            <p>Next Js</p></div>

          <div onClick={() => { setselectedcourse('fullstack') }} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
            <GiCampingTent size={100} ></GiCampingTent>
            <p>Full-stack camp</p></div>
          <div onClick={() => { setselectedcourse('frontend') }} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
            <MdOutlineShapeLine size={100} ></MdOutlineShapeLine>
            <p>Frontend camp</p></div>
          <div onClick={() => { setselectedcourse('backend') }} className="flex flex-col m-5  h-20  text-white hover:text-green-600 cursor-pointer text-center ">
            <TbServerCog size={100} ></TbServerCog>
            <p>Backend camp</p></div>


        

        </div>

      
      </div>
      <div className="  flex-1 text-center align-center justify-center flex flex-row  text-3xl font-bold visible ">Choose to know the curriculums</div>
      <div className="flex-1 w-12/12 text-lg w-100 mt-2  flex flex-row text-center justify-center align-center   text-white">
        
        <pre>{coursesSate[selectedcourse]}</pre>
          
        
      </div>

    </div>
  )
}
export default function Home() {
 


  return (
    <div className="grid grid-row md:grid-row w-full h-full bg-white" >
     
      <div className="w-full h-50 justify-center flex flex-row bg-black ">
        <Image src='/without_any_thing.png' width={'700'} height={'700'} alt="sss" className="self-end "></Image>
      </div>
      <Navbar></Navbar>
    
      <Pharmaclone></Pharmaclone>
      <AndroidService></AndroidService> 
    <WebsiteService></WebsiteService>
      <CoursesService></CoursesService>
      <AskAboutTheCurculums></AskAboutTheCurculums>
    <Contact></Contact>
     
      

    




    

      


      
    </div>
  )
}
