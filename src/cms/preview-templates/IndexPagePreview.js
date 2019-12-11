import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import { injectIntl } from "gatsby-plugin-intl"


const IndexPagePreview = ({ entry, getAsset, intl }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(intl )
  if (data) {
    console.log(navigator.language)
    return (
        <IndexPageTemplate
          image={data.image}
          title={data.title}
          heading={data.heading}
          subheading={data.subheading}
          description={data.description}
          intro={data.intro || { blurbs: [] }}
          mainpitch={data.mainpitch || {}}
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default injectIntl(IndexPagePreview)
