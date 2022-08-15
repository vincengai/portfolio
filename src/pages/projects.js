import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {

  const res =  fetch("/projects/")
  console.log(res, 'response asdsadas')
  return (
   <div>
     <h2>projects page</h2>
     <Projects />
   </div> 
  )
}

export default ProjectsPage
