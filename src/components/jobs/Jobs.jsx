import React, { useEffect, useState } from "react";
import JobsData from "./jobs.json";
import "./Jobs.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin, FaSlack, FaDiscord } from "react-icons/fa";


import {FaTimes} from 'react-icons/fa'
import BlogsSkeleton from "../blogs/BlogsSkeleton";
const Jobs = () => {
  let [isModal,setIsModal]=useState(false)

  let [isJobModal,setIsJobModal]=useState(false)
function handleJobClose(){
  setIsJobModal(false)
}

  const [loading, setLoading] = useState(true); // Loading state

  function handleOpenModal(){
    setIsModal(true)
    console.log('click')
  }
  function handleCLoseModal(){
    setIsModal(false)
  }

  function handlePostJob(){
    setIsJobModal(true)
  }

useEffect(() => {
    // Simulate loading delay of 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, []);

  return (
  <>  <div className="jobsPage">
      <Navbar />
      <header className="jobsPage-header">
        <h1 className="jobsPage-main-title">Available Jobs</h1>
        <p className="jobsPage-subtitle">Explore exciting career opportunities</p>
      </header>
      <div style={{width:"100vw",textAlign:"center"}}><button onClick={handlePostJob} style={{cursor:"pointer",margin:"auto",padding:"8px 17px",backgroundColor:"#12229d",borderRadius:"10px",color:"white"}}>Post Job</button></div>
      <section className="jobsPage-content" style={{zIndex:10}}>
      { loading ? (
            <BlogsSkeleton count={JobsData.length} />) :    ( <div className="jobsPage-list">
              {  JobsData.map((job) => (
            <div key={job.id} className="jobsPage-card">
              <h2 className="jobsPage-title">{job.title}</h2>
              <h3 className="jobsPage-company">{job.company}</h3>
              <p className="jobsPage-description">{job.description}</p>
              <p className="jobsPage-location">Location: {job.location}</p>
              <button className="jobsPage-apply" onClick={handleOpenModal}>Apply Now</button>
            </div>
          ))}
        </div>)}
      </section>
      <footer id="footer" className="footer-area fixed-color2">
      <div className="container">
        <div className="link-container">
          <ul className="link">
            <li><a href="/">Home</a></li>
            <li><a href="./About">About Us</a></li>
            <li><a href="./blogs">Blog</a></li>
            <li><a href="./contribute">Our Contributors</a></li>
            <li><a href="./join-us">Join Us</a></li>
            <li><a href="./help">Help</a></li>
            <li><a href="./contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <ul className="link-2">
            <li><a href="./Terms">Terms & Conditions</a></li>
            <li><a href="./privacy-policy">Privacy Policy</a></li>
          </ul>
          <div className="footer-copyright">
            <p className="text">
              <span className='line'></span>
              © {new Date().getFullYear()} from Counsellor
            </p>
          </div>
          <ul className="social-icons">
            <li><a href="https://github.com/Counselllor/Counsellor-Web" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://discord.com" target="_blank" rel="noreferrer"><FaDiscord /></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://slack.com" target="_blank" rel="noreferrer"><FaSlack /></a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
   {
isModal&&<>
<div className="modal-jobs" >
  <FaTimes onClick={handleCLoseModal} style={{position:"absolute",right:"20px",top:"20px",cursor:"pointer",}} size={'2rem'}/>
<div className="jobs-container">
  <h1>Application Form</h1>
  <form className="modal-form" >
    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
      
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="resume">Upload Resume</label>
      <input
        type="file"
        id="resume"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="coverLetter">Cover Letter</label>
      <textarea
        id="coverLetter"
        required
      ></textarea>
    </div>
    <button type="submit" className="submit-button1">Submit Application</button>
  </form>
</div>
</div>
<div className="blackb"></div></>
   } 
     {
isJobModal&&<>
<div className="modal-jobs" style={{overflowY:"scroll",overflowX:"hidden"}}>
  <FaTimes onClick={handleJobClose} style={{position:"absolute",right:"20px",top:"20px",cursor:"pointer",}} size={'2rem'}/>
<div className="jobs-container"   >
  <h1   style={{overflow:"scroll"}}>Add Job</h1>
  <form className="modal-form"  >
    <div className="form-group">
      <label htmlFor="name">Job Title</label>
      <input type="text" id="jobTitle" name="jobTitle" required/>

    </div>
    <div className="form-group">
      <label htmlFor="email">Job Description</label>
      <textarea id="jobDescription" name="jobDescription" rows="5" required></textarea>

    </div>
    <div className="form-group">
      <label>Company Name</label>
      <input type="text" id="companyName" name="companyName" required />

    </div>
    <div className="form-group">
      <label htmlFor="location">Location</label>
      <input type="text" id="location" name="jobSalary" required />

    </div>
    <div className="form-group">
      <label htmlFor="phone">Job Salary</label>
      <input type="text" id="jobSalary" name="jobSalary" required />

    </div>
    <div className="form-group">
      <label>Job Type</label>
    <select id="jobType" name="jobType" required>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                </select>
    </div>
    <div className="form-group">
    <label htmlFor="experienceLevel">Experience Level</label>
                <select id="experienceLevel" name="experienceLevel" required>
                    <option value="entry">Entry</option>
                    <option value="mid">Mid</option>
                    <option value="senior">Senior</option>
                </select>
    </div>
    <div className="form-group">
    <div class="form-group">
                <label for="applicationDeadline">Application Deadline</label>
                <input type="date" id="applicationDeadline" name="applicationDeadline" required/>
            </div>
     </div>
    <button type="submit" className="submit-button">Submit Job</button>
  </form>
</div>
</div>
<div className="blackb"></div></>
   }   </>
  );
};

export default Jobs;
