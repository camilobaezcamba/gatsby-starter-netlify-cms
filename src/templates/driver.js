import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import { Rounded } from "../components/buttons";
import { Box, Flex } from "../components/Flex";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import remark from "remark";
import remarkHTML from "remark-html";
import Requeriments from "../components/Requeriments"

export const DriverPageTemplate = ({
  image,
  heading,
  headingButton,
  banner,
  requerimentsTitle,
  requeriments
}) => {
  console.log("Driver Page Template");
  console.log(requeriments)
  return (
    <>
      <Banner
        fullscreen
        bg={
          !!image.childImageSharp
            ? image.childImageSharp.fluid.src
            : image
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
      <Flex justifyContent="center" textAlign="center" alignItems="center" sx={{color: 'title'}}>
          <Box width={1}>
            <h1>{requerimentsTitle}</h1>
          </Box>
          <Box  width={1}>
            <Requeriments requeriments={requeriments}></Requeriments>
          </Box>
        </Flex>
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

export const DataWhitLang = data => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const heading = data[`heading_${lang}`];
  const headingButton = data[`headingButton_${lang}`];
  const image = data.image;
  const banner = {
    title: data.banner[`title_${lang}`],
    button: data.banner[`button_${lang}`],
    description: data.banner[`description_${lang}`],
    image: data.banner.image
  };
  const requerimentsTitle = data[`requerimentsTitle_${lang}`];
  const requeriments = data.requeriments.map(item => ({
    title: item[`title_${lang}`],
    description: toHml(item[`description_${lang}`]),
    image: item.image
  }));

  return {
    heading,
    headingButton,
    image,
    banner,
    requerimentsTitle,
    requeriments
  }
}

const DriverPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { heading, headingButton, image, banner, requerimentsTitle, requeriments} = DataWhitLang(frontmatter);

  return (
    <Layout>
      <DriverPageTemplate
        heading={heading}
        headingButton={headingButton}
        image={image}
        banner={banner}
        requerimentsTitle={requerimentsTitle}
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
        requerimentsTitle_en
        requerimentsTitle_es
        requeriments {
          title_en
          title_es
          image {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
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
