import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as Styles from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return(
        <div className={Styles.container}>
            <title>{pageTitle}</title>
            <header>
                <h1 className={Styles.siteTitle}>{data.site.siteMetadata.title}</h1>
            </header>
            <nav>
                <ul className={Styles.navLinks}>
                    <li className={Styles.navLinkItem}><Link to='/' className={Styles.navLinkText}>Home</Link></li>
                    <li className={Styles.navLinkItem}><Link to="/about" className={Styles.navLinkText}>About</Link></li>
                    <li className={Styles.navLinkItem}><Link to="/blog" className={Styles.navLinkText}>Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={Styles.heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout