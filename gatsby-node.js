const path = require(`path`);

exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions
    const blogPostTemplate = path.resolve(`src/templates/project-details.jsx`)

    const {data} = await graphql(`
    query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
          path: `${`/projects/` + node.frontmatter.slug}`,
          component: blogPostTemplate,
          context: {
            slug: node.frontmatter.slug,
          },
            })
        })
}