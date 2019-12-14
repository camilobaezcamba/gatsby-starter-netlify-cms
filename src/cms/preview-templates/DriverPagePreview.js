import React from 'react'
import PropTypes from 'prop-types'
import { DriverPageTemplate } from '../../templates/driver'
import Layout from "../../components/Layout"

const DriverPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <Layout>
        <DriverPageTemplate
          image={data.image}
          title={data.title}
          heading={data.heading}
          headingButton={data.headingButton}
          banner={data.banner || { requisitos: [] }}
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
