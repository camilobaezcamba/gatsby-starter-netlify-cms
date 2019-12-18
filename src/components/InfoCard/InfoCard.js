import React, { useState, useEffect } from "react"
import { Box, Flex } from "reflexbox/styled-components"
import PropTypes from "prop-types"
import { useCurrentBreakpointName } from 'react-socks'
import PreviewCompatibleImage from "../PreviewCompatibleImage"

/**
 * Item (Responsive) para ser utilizado dentro de un listado
 */
const InfoCard = ({ title, subtitle, detail, logo, align}) => {
  const breakpoint = useCurrentBreakpointName()
  const [isPhone, setIsPhone] = useState(false)

  useEffect(() => {
    setIsPhone(breakpoint === 'xsmall')
  }, [breakpoint]);

  const getList = detail => {
    if (detail)
      return (
        <ul>
          {detail.map((item, index) => (
            <li key={index}>
              {item.text}
              {getList(item.children)}
            </li>
          ))}
        </ul>
      )
  }

  const getPadding = () =>{
    return isPhone ? [2] : [5]
  }

  const getPaddingTop = (position) =>{
    if(position === 'first')
      return isPhone ? [5] : [6]
    else
      return isPhone ? [1] : [6]
  }

  return (
    <Flex flexWrap="wrap"
      style={isPhone ? { textAlign: align || "center"} : {}}
    >
      <Box px={getPadding()} pt={getPaddingTop('first')}  width={[1, 1 / 2]} style={isPhone ? {} : { textAlign: "right"}}>
        {isPhone && <h3 style={{ color: "#2F2F2F" }}>{subtitle}</h3>}
        <PreviewCompatibleImage imageInfo={{
                                image: logo,
                                alt: `featured image thumbnail for post info card`,
                                style: {width: '350px'}
                              }}  />
      </Box>
      <Box px={getPadding()} pt={getPaddingTop('second')} width={[1, 1 / 2]}>
        {subtitle && (
          <>
            {!isPhone && <h3 style={{ color: "#2F2F2F" }}>{subtitle}</h3>}
            <h2 style={{ color: "#2F2F2F" }}>{title}</h2>
          </>
        )}
        {!subtitle && (
          <>
            <h3 style={{ color: "#2F2F2F" }}>{title}</h3>
          </>
        )}
        {detail && !(detail instanceof Array) && (
         {detail}
        )}
        {detail && detail instanceof Array && getList(detail)}
      </Box>
    </Flex>
  )
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  detail: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired
  ]),
  logo: PropTypes.any
}

export default InfoCard
