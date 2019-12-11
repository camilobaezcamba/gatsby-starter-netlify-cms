import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import { IntlProvider, addLocaleData } from 'react-intl'
addLocaleData([{'title': 'Test title'}]);


const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    console.log(navigator.language)
    return (
      <IntlProvider locale={'en'} messages={{'title': 'Test title'}}>
        <IndexPageTemplate
          image={data.image}
          title={data.title}
          heading={data.heading}
          subheading={data.subheading}
          description={data.description}
          intro={data.intro || { blurbs: [] }}
          mainpitch={data.mainpitch || {}}
        />
      </IntlProvider>

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
