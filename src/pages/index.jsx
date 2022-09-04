import React from "react"
import {graphql, Link} from 'gatsby';
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Layout from "../components/Layout";
import '../styles/home.scss';

export default function Home({data}) {
    console.log(data);
    const image = getImage(data.file.childImageSharp.gatsbyImageData)

    return (
        <Layout>
            <section className="home">
                <div className="info">
                    <h1 className="hello">Hello Elo</h1>
                    <h2>Develop & Deploy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod laboriosam
                        repellat nihil voluptates quos totam. Doloremque vel nostrum quibusdam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod laboriosam
                        repellat nihil voluptates quos totam. Doloremque vel nostrum quibusdam? Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, accusantium
                        est! Architecto odit porro iste veniam beatae eaque minima! A explicabo ratione
                        nobis alias, perferendis aut vel error. Minima, debitis. Modi in molestiae
                        dolorem delectus voluptates earum repudiandae, similique atque.</p>
                    <Link className="button" to="/projects">My Projects</Link>
                </div>
                <div>
                    <GatsbyImage image={image} alt="Banner" className="site_banner"/>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql `
query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`