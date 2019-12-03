import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import { IntlProvider } from 'react-intl'
import es from '../../i18n/es';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <IntlProvider locale='es' messages={es}>
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  </IntlProvider>  
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
