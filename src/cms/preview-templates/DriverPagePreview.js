import React from 'react'
import PropTypes from 'prop-types'
import { DriverPageTemplate, DataWhitLang } from '../../templates/driver'
import Layout from "../../components/Layout"

const DriverPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    const { heading, headingButton, image, banner, requeriments} = DataWhitLang(data);
    return (
      <Layout>
        <DriverPageTemplate
          image={image}
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
