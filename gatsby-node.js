const fs = require("fs");
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const localesNSContent = {
  en: [
    {
      content: fs.readFileSync(`src/locales/en/common.json`, "utf8"),
      ns: "common"
    }
  ],
  fr: [
    {
      content: fs.readFileSync(`src/locales/fr/common.json`, "utf8"),
      ns: "common"
    }
  ]
};

const availableLocales = [
  { value: "fr", text: "Francais" },
  { value: "en", text: "English" }
];

// default locales don't end up in a specific locale route i.e example.com for english and example.com/fr for franch
const defaultLocales = { value: "fr", text: "Francais" };

exports.onCreatePage = async props => {
  const {
    page,
    actions: { createPage, deletePage, createRedirect }
  } = props;

  if (/^\/dev-404-page\/?$/.test(page.path)) {
    return;
  }

  deletePage(page);

  availableLocales.map(({ value }) => {
    let newPath = `/${value}${page.path}`;
    if (defaultLocales.value === value) {
      newPath = page.path;
    }

    const localePage = {
      ...page,
      originalPath: page.path,
      path: newPath,
      context: {
        availableLocales,
        locale: value,
        routed: true,
        data: localesNSContent[value],
        originalPath: page.path
      }
    };
    createPage(localePage);
  });
};


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}