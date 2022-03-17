import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

// markup

const NewIndexPage = () =>{
  return(
    <main>
      <Layout pageTitle="Home">
      <h1>Hello</h1>
      <h2>Welcome to my new Gatsby site</h2>
      <StaticImage 
      alt="an image of a mountain"
      src="../images/MtFuji-GettyImages-959111140.webp"
       />
      </Layout>
    </main>
  )
}

export default NewIndexPage
