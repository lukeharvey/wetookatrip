import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Tags from "../components/Tags";
import Comments from "../components/Comments";

export const BlogPostTemplate = ({
  comments,
  content,
  contentComponent,
  date,
  slug,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="BlogPost">
      {helmet || ""}
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <p>Published: {date}</p>
      <PostContent content={content} />
      <Tags tags={tags} />
      <Comments comments={comments} slug={slug} />
    </section>
  );
};

BlogPostTemplate.propTypes = {
  comments: PropTypes.array,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  date: PropTypes.string,
  description: PropTypes.string,
  helmet: PropTypes.object,
  slug: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const comments = data.allCommentsYaml && data.allCommentsYaml.edges;

  return (
    <Layout>
      <BlogPostTemplate
        comments={comments}
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        helmet={
          <Helmet title={`${post.frontmatter.title} | We Took A Trip...`} />
        }
        slug={post.fields.slug}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allCommentsYaml: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!, $slug: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
    allCommentsYaml(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          name
          email
          message
          date
        }
      }
    }
  }
`;
