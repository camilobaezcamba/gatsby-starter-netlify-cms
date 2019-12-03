import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import { IntlProvider } from 'react-intl'
import { useIntl } from 'gatsby-plugin-intl'

const AboutPagePreview = ({ entry, widgetFor }) => {
  console.log(useIntl());
  return (
    <IntlProvider locale='es' messages={{'title': 'My title test'}}>
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
    </IntlProvider>  
  )
}
AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
