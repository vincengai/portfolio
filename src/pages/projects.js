import React, {useEffect, useState} from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid
import axios from 'axios';

const ProjectsPage = () => {
  const [projectsData, setprojectsData] = useState({});

  const qs = require('qs');
  const query = qs.stringify({
    populate: '*', 
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  useEffect( () => {
    fetchData()
  }, [])

  const fetchData = async () => {
      axios.get(`http://localhost:1337/api/projects?${query}`).then(response => {
        setprojectsData(response?.data); 
      })
    };

  console.log(projectsData, 'hola')  

  return (
   <div>
     <h2>projects page</h2>
     <Projects />
   </div> 
  )
}

export default ProjectsPage
