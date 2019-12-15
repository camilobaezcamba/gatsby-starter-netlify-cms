import React from 'react'
import PropTypes from 'prop-types'
import { DriverPageTemplate, dataWhitLang } from '../../templates/driver'
import Layout from "../../components/Layout"

const DriverPagePreview = ({ entry, getAsset }) => {
  const { heading, headingButton, image, banner, requeriments} = dataWhitLang(entry.getIn(['data']).toJS());
  if (data) {
    return (
      <Layout>
        <DriverPageTemplate
          image={image}
          title={title}
          heading={heading}
          headingButton={headingButton}
          banner={banner || {}}
          requeriments={requeriments || []}
        />
      </Layout>


    )
  } else {
    return <div>Loading...</div>
  }
}

DriverPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default DriverPagePreview
