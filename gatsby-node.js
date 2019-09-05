const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs');

/**
 * Just used for add graphql syntax based on vscode apollo extension
 * @param {string[]} strings
 * @param {any[]} values
 */
function gql(strings, ...values) {
  let str = '';
  strings.forEach((string, i) => {
    str += string + (values[i] || '');
  });
  return str;
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const { id } = edge.node;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateDevServer = ({ app }) => {
  fsMiddlewareAPI(app);
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = gql`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Links {
      name: String!
      url: String!
    }

    type ResearchCard {
      description: String!
      links: [Links!]
    }

    type Contact {
      name: String!
      email: String!
    }

    type OtherInfos {
      info: String
      link: String
      label: String
    }

    type FeaturedLink {
      label: String
      url: String
    }

    type Frontmatter {
      description: String
      id: String
      history: String
      links: [Links!]
      books: [ResearchCard!]
      thesis: [ResearchCard!]
      articles: [ResearchCard!]
      contacts: [Contact!]
      address1: String
      address2: String
      memberRole: String
      memberName: String
      memberThumb: File @fileByRelativePath
      memberSince: Date @dateformat
      memberUntil: Date @dateformat
      memberEmail: String
      memberLattes: String
      isFormerMember: Boolean
      memberLinkedin: String
      memberType: Int
      memberOtherInfos: [OtherInfos!]
      memberFeaturedLink: FeaturedLink
      projectName: String
      projectStart: Date @dateformat
      projectEnd: Date @dateformat
      projectThumb: File @fileByRelativePath
      blogTitle: String
      blogAuthor: String
      date: Date @dateformat
      blogFeaturedImage: File @fileByRelativePath
      featured: String
      activitieTitle: String
      activitieType: String
      activitieLocation: String
      activitieLink: FeaturedLink
      relatedProjects: [MarkdownRemark] @link(by: "frontmatter.id")
      projectMembers: [MarkdownRemark] @link(by: "frontmatter.id")
      projectFormerMembers: [MarkdownRemark] @link(by: "frontmatter.id")
      coordinators: [MarkdownRemark] @link(by: "frontmatter.id")
      formerMembers: [MarkdownRemark] @link(by: "frontmatter.id")
    }
  `;

  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  if (process.env.NODE_ENV === 'development') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.ya?ml$/,
            loader: 'yaml',
          },
        ],
      },
    });
  }
};
