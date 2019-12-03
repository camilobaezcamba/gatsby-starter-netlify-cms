import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { useIntl, injectIntl } from 'gatsby-plugin-intl'
import { FormattedMessage } from 'react-intl'
import { Link } from 'gatsby-plugin-intl'

export const AboutPageTemplateBase = ({ title, content, contentComponent, intl }) => {
  const intl2 = useIntl()
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {}
                <FormattedMessage id="title" />
              </h2>
              <Link className="btn" to="/blog">
                      Read more
                    </Link>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const AboutPageTemplate = injectIntl(AboutPageTemplateBase)

AboutPageTemplateBase.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
