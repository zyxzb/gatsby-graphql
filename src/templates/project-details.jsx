import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import {GatsbyImage} from "gatsby-plugin-image";
import '../styles/project-details.scss';

const ProjectDetails = ({data}) => {

    const {html} = data.markdownRemark;
    const {stack, title, featuredImg} = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <div className='details'>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className='featured'>
                    <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="featured"/>
                </div>
                <div
                    className='html_info'
                    dangerouslySetInnerHTML={{
                    __html: html
                }}/>
            </div>
        </Layout>
    );
}

export default ProjectDetails;

export const query = graphql `
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              transformOptions: {grayscale: true}
            )
          }
        }
      }
    }
  }
`