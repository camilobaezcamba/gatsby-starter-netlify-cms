import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import {createIntl, createIntlCache, RawIntlProvider} from 'react-intl'

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache()

const intl = createIntl({
  locale: 'en',
  messages: {}
}, cache)

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    console.log(navigator.language)
    return (
      <RawIntlProvider value={intl}>
        <IndexPageTemplate
          image={data.image}
          title={data.title}
          heading={data.heading}
          subheading={data.subheading}
          description={data.description}
          intro={data.intro || { blurbs: [] }}
          mainpitch={data.mainpitch || {}}
        />
      </RawIntlProvider>

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

export default IndexPagePreview
