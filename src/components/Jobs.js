import React, { useEffect, useState} from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import axios from 'axios';

const Jobs = () => {
  const [value, setValue] = useState(0);
  const [jobsData, setjobsData] = useState({});
  // const {company, date, desc, position, url} = jobsData?.data[0]?.attributes;
  const [position, setPosition] = useState("");
  const [jobData, setJobData] = useState({});

  const qs = require('qs');
  const query = qs.stringify({
    populate: '*', 
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  useEffect( () => {
    fetchData();
  }, [])


  const fetchData = async () => {
    axios.get(`http://localhost:1337/api/jobs?${query}`).then(response => {
      setjobsData(response?.data); 
      setJobData(response.data.data[value].attributes)
    })

  };
  console.log(jobData)
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
      <div className="btn-container">
        {jobsData?.data?.map( (job, index) => {
          return (
            <button key={index} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{job.attributes.company}</button>
          )
        })}
      </div>
      <article className="job-info">
        <h3>{jobData.position}</h3>
        <h4>{jobData.company}</h4>
        <p className="job-date">{jobData.date}</p>
      </article>
      </div>
    </section>
  )
}

export default Jobs
