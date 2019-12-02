import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link } from "gatsby-plugin-intl";
import Layout from "../components/Layout";

const BlogsPost = ({ data }) => {
  console.log("posts", data);
  const { edges: posts } = data.allMarkdownRemark;

  console.log("posts", posts);

  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
            backgroundColor: "#f40",
            color: "white",
            padding: "1rem"
          }}
        >
          Latest Stories
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="columns is-multiline">
              {posts &&
                posts.map(({ node: post }) => (
                  <div className="is-parent column is-6" key={post.id}>
                    <article
                      className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? "is-featured" : ""
                      }`}
                    >
                      <header>
                        {post.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.frontmatter.title}`
                              }}
                            />
                          </div>
                        ) : null}
                        <p className="post-meta">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={post.fields.slug}
                          >
                            {post.frontmatter.title}
                          </Link>
                          <span> &bull; </span>
                          <span className="subtitle is-size-5 is-block">
                            {post.frontmatter.date}
                          </span>
                        </p>
                      </header>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link className="button" to={post.fields.slug}>
                          Keep Reading →
                        </Link>
                      </p>
                    </article>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

BlogsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogsPost;

export const pageQuery = graphql`
  query BlogsRollQuery($language: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "blogs-post" }
          language: { eq: $language }
        }
      }
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
            featuredpost
            language
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
