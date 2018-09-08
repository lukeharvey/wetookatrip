import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section>
        {posts.map(({ node: post }) => (
          <div key={post.id} style={{ marginTop: "6rem" }}>
            <h2 style={{ textAlign: "center" }}>
              <Link
                to={post.fields.slug}
                style={{ color: "#000", textDecoration: "none" }}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
            <Link to={post.fields.slug}>Keep Reading →</Link>
          </div>
        ))}
      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
