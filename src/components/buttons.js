import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"

const createCss = ({ from, to }) => css`
  background: ${from};
  &:hover {
    background: ${to};
  }
`

// different styles on hover for each type
const styles = {
  filled: {
    from:
      "linear-gradient(135deg,rgba(255, 216, 0, 1) 0%, rgba(255, 119, 0, 1) 100%)",
    to:
      "linear-gradient( 135deg, rgba(255, 119, 0, 1) 0%, rgba(165, 0, 52, 1) 100%)"
  },
  index: {
    from:
      "linear-gradient( 135deg, rgba(255, 216, 0, 0) 0%, rgba(255, 119, 0, 0) 100%)",
    to:
      "linear-gradient( 135deg, rgba(255, 216, 0, 1) 0%, rgba(255, 119, 0, 1) 100%)"
  },
  conductor: {
    from:
      "linear-gradient( 135deg, rgba(255, 216, 0, 0) 0%, rgba(255, 119, 0, 0) 100%)",
    to:
      "linear-gradient( 135deg, rgba(255, 119, 0, 1) 0%, rgba(165, 0, 52, 1) 100%)"
  },
  coorporativo: {
    from:
      "linear-gradient( 135deg, rgba(255, 216, 0, 0) 0%, rgba(255, 119, 0, 0) 100%)",
    to:
      "linear-gradient( 135deg, rgba(165, 0, 52, 1) 0%, rgba(22, 32, 86, 1) 100%)"
  }
}

//${props =>
//props.background ? `background: ${props.background}` : "transparent"};

export const Rounded = styled(Link)`
  background: transparent;
  border: ${props => (props.type === "filled" ? "0" : "1.5px solid #fff")};
  text-decoration: none;
  display: inline-block;
  ${props =>
    props.type ? createCss(styles[props.type]) : createCss(styles.filled)};

  line-height: 22px;
  padding: ${props =>
    props.type === "filled" ? "13.5px calc(3em + 1.5px)" : "12px 3em"};
  border-radius: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;

  & :active {
    outline: none;
  }
  & :hover {
    color: #fff;
    padding: 13.5px calc(3em + 1.5px);
    border: 0;
  }
`

Rounded.propTypes = {
  type: PropTypes.oneOf(["index", "filled", "conductor", "coorporativo"]),
  filled: PropTypes.bool
}

Rounded.defaultProps = {
  type: "filled"
}

export const SimpleBase = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    font-weight: bold;
  }
`

const Arrow = styled.img`
  margin: 0;
  margin-left: 12.5px;
`

const CenteredSpan = styled.span`
  display: flex;
  align-items: center;
`

export const RoundedHover = ({ style, ...props }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <Spring
      to={{
        background: toggle ? styles[style].to : styles[style].from
      }}
    >
      {spring => {
        return (
          <Rounded
            {...props}
            background={spring.background}
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
          />
        )
      }}
    </Spring>
  )
}

export const Simple = ({ to, children }) => (
  <CenteredSpan>
    <SimpleBase to={to}>{children}</SimpleBase>
  </CenteredSpan>
)
