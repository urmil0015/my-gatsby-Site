import * as React from 'react'
import { graphql, Link } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
console.log(data);

    return(
        <Layout pageTitle="My Blog Page">

            <p>My posts will go here</p>
            
                {
                    data.allMdx.nodes.map((node) =>(

                        <article key={node.id}>

                            <br />
                            <h2>
                                <Link target={"_blank"} to={node.slug}>{node.frontmatter.title}</Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <br />

                        </article>
                    ))

                }
        </Layout>
    )
}

export const query = (graphql `
query{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          body
          slug
        }
    }
}
`)

export default BlogPage