import React from 'react'
import PropTypes from 'prop-types'
import { DriverPageTemplate } from '../../templates/driver'
import Layout from "../../components/Layout"

const DriverPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
  console.log(getAsset(entry.getIn(['data', 'image'])))
  console.log(getAsset(entry.getIn(['data', 'banner', 'image'])))
  const entryBlurbs = entry.getIn(['data', 'banner', 'requerimentos'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []
  console.log(entryBlurbs)
  console.log(blurbs)
  if (data) {
    return (
      <Layout>
        <DriverPageTemplate
          image={data.image}
          title={data.title}
          heading={data.heading}
          headingButton={data.headingButton}
          banner={data.banner || { requeriments: [] }}
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
