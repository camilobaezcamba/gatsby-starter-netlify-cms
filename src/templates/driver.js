import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { Rounded } from "../components/buttons"
import { Box, Flex } from "../components/Flex"
import { graphql } from "gatsby"

export const DriverPageTemplate = ({
  image,
  heading,
  headingButton,
  banner
}) => {
  console.log('Driver Page Template')
  return (
    <>
      <Banner fullscreen bg={!!image.childImageSharp ? image.childImageSharp.fluid.src : banner.image}>
        <Flex justifyContent="center" textAlign="center" alignItems="center">
          <Box width={1}>
            <h1>{heading}</h1>
            <Rounded type="conductor" to="/">
              {headingButton}
            </Rounded>
          </Box>
        </Flex>
      </Banner>
      {/*Banner*/}
      <Banner bg={!!banner.image.childImageSharp ? banner.image.childImageSharp.fluid.src : banner.image}>
        <Flex>
          <Box width={[1, 5 / 12]}>
            <h2>{banner.title}</h2>
            <p>{banner.description}</p>
          </Box>
          <Box flex alignItems="center" width={[1, 7/12]} justifyContent="center">
            <Rounded type="conductor">{banner.button}</Rounded>
          </Box>
        </Flex>
      </Banner>
    </>
  )
}

const DriverPage = ({ data }) => {
  console.log(data.markdownRemark)
  const {
    frontmatter: { image, heading, headingButton, banner }
  } = data.markdownRemark

  return (
    <Layout>
      <DriverPageTemplate
        heading={heading}
        headingButton={headingButton}
        image={image}
        banner={banner}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query DriverPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "driver" } }) {
      frontmatter {
        heading
        headingButton
        image {
          childImageSharp {
            fluid(maxWidth: 1140, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banner {
          title
          button
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1140, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default DriverPage
