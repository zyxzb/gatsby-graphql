import {Link, graphql, useStaticQuery} from 'gatsby';
import React from 'react';

const Navbar = () => {
    const data = useStaticQuery(graphql`
    query SiteInfo {
        site {
          siteMetadata {
            title
          }
        }
      }  
    `)

const {title} = data.site.siteMetadata;

    return (
        <nav>
            <Link to='/'>
                <h1>{title}</h1>
            </Link>
            <div className="links">
                <Link
                    className='link'
                    to="/"
                    activeClassName="active"
                    activeStyle={{
                    color: "pink",
                }}>Home</Link>
                <Link
                    className='link'
                    to="/about"
                    activeClassName="active"
                    activeStyle={{
                    color: "pink",
                }}>About</Link>
                <Link
                    className='link'
                    to="/projects"
                    activeClassName="active"
                    activeStyle={{
                    color: "pink",
                }}>Projects</Link>
            </div>
        </nav>
    );
}

export default Navbar;
