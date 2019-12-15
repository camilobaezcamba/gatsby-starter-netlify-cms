import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { Rounded } from "../components/buttons";
import { Box, Flex } from "../components/Flex";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import { HTMLContent } from "../components/Content";
import remark from "remark";
import remarkHTML from "remark-html";
export const DriverPageTemplate = ({
  image,
  heading,
  headingButton,
  banner,
  requeriments
}) => {
  console.log("Driver Page Template");
  return (
    <>
      <Banner
        fullscreen
        bg={
          !!image.childImageSharp
            ? image.childImageSharp.fluid.src
            : banner.image
        }
      >
        <Flex justifyContent="center" textAlign="center" alignItems="center">
          <Box width={1}>
            <h1>{heading}</h1>
            <Rounded type="conductor" to="/">
              {headingButton}
            </Rounded>
          </Box>
        </Flex>
      </Banner>
      {requeriments &&
        requeriments.map(item => {
          return (
          <div>
            <HTMLContent content={item.description}></HTMLContent>
          </div>)
        })}
      <Banner
        bg={
          !!banner.image.childImageSharp
            ? banner.image.childImageSharp.fluid.src
            : banner.image
        }
      >
        <Flex>
          <Box width={[1, 5 / 12]}>
            <h2>{banner.title}</h2>
            <p>{banner.description}</p>
          </Box>
          <Box
            flex
            alignItems="center"
            width={[1, 7 / 12]}
            justifyContent="center"
          >
            <Rounded type="conductor">{banner.button}</Rounded>
          </Box>
        </Flex>
      </Banner>
    </>
  );
};

export const toHml = markdown => {
  return remark()
    .use(remarkHTML)
    .processSync(markdown)
    .toString();
};

const DriverPage = ({ data }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { frontmatter } = data.markdownRemark;
  const heading = frontmatter[`heading_${lang}`];
  const headingButton = frontmatter[`headingButton_${lang}`];
  const image = frontmatter.image;
  const banner = {
    title: frontmatter.banner[`title_${lang}`],
    button: frontmatter.banner[`button_${lang}`],
    description: frontmatter.banner[`description_${lang}`],
    image: frontmatter.banner.image
  };
  const requeriments = frontmatter.requeriments.map(item => ({
    title: item[`title_${lang}`],
    description: toHml(item[`description_${lang}`]),
    image: item.image
  }));

  return (
    <Layout>
      <DriverPageTemplate
        heading={heading}
        headingButton={headingButton}
        image={image}
        banner={banner}
        requeriments={requeriments}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query DriverPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "driver" } }) {
      frontmatter {
        heading_en
        heading_es
        headingButton_en
        headingButton_es
        image {
          childImageSharp {
            fluid(maxWidth: 1140, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        banner {
          title_en
          title_es
          button_en
          button_es
          description_en
          description_es
          image {
            childImageSharp {
              fluid(maxWidth: 1140, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        requeriments {
          title_en
          title_es
          image {
            childImageSharp {
              fluid(maxWidth: 1140, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description_en
          description_es
        }
      }
    }
  }
`;

export default DriverPage;
