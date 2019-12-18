import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from "reflexbox/styled-components"
import InfoCard from "./InfoCard"

const Requeriments = ({requeriments}) => {
    
    console.log(requeriments)
    return (
    <Flex>
      <Box width={[1]}>
        {requeriments.map((item, index) => {
            const newItem = {title: item.title, detail: item.description, logo: item.image}
          return <InfoCard key={index} {...newItem} align="center"></InfoCard>
        })}
      </Box>
    </Flex>
  )}
  
  Requeriments.propTypes = {
    requeriments: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            title: PropTypes.string,
            description: PropTypes.string
        })
    )
  }
  
  export default Requeriments
  