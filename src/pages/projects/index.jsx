import React from 'react';
import {graphql, Link} from 'gatsby';
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Layout from '../../components/Layout';
import '../../styles/projects.scss';

const Index = ({data}) => {
    const projects = data.allMarkdownRemark.nodes;
    const contact = data.site.siteMetadata.contact;

    return (
        <Layout>
            <section className='projects'>
                <h1>Hello Projects 👲</h1>
                <h2>Develop & Deploy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod laboriosam
                    repellat nihil voluptates quos totam. Doloremque vel nostrum quibusdam? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quos quod autem repudiandae
                    quo, vero explicabo debitis obcaecati earum architecto delectus deleniti
                    voluptatem suscipit? Quae voluptatum sapiente voluptatem iure quidem ex?</p>
                <div className="blog-container">
                    <div className='articles'>
                        {projects.map(project => (
                            <article className='article' id={project.id}>
                                <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
                                    <GatsbyImage
                                        image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)}
                                        alt="Banner"
                                        className='image'/>
                                </Link>
                                <div>
                                    <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
                                        <h2>{project.frontmatter.title}</h2>
                                    </Link>
                                    <p>{project.frontmatter.stack}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className='articles-links'>
                        <ul>
                            {projects.map(project => (
                                <li>
                                    <Link to={`#${project.id}`} key={project.id}>
                                        {project.frontmatter.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p>Random mail from siteMetadata: {contact}</p>
            </section>
        </Layout>
    );
}
export const query = graphql `
query ProjectsPage {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
            }
          }
        }
        id
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
  
`
export default Index;
