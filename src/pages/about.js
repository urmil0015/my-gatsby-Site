import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Greetings = (props) =>{
    return(
        <span>{props.name}</span>
    )
}

const AboutPage = () => {
    return(
        <main>
            <Layout pageTitle="About">
            <h1>Hello</h1>
            <p>Welcome to <Greetings name="Urmil" />'s About page</p>
            <Link to="/">Home page</Link>
            </Layout>
        </main>
    )
}

export default AboutPage