import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
console.log(data);
    return(
        <Layout pageTitle="My Blog Page">
            <p>My posts will go here</p>
            
            <ul>
                {
                    data.allFile.nodes.map(node =>
                        <li key={node.name}>{node.name}</li>
                    )

                }
            </ul>
        </Layout>
    )
}

export const query = (graphql `
query{
    allFile {
        nodes {
          name
        }
      }
}
`)

export default BlogPage