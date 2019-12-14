import styled, { css } from "styled-components"
import { Flex as Reflexbox, Box as PlainBox } from "reflexbox/styled-components"
import React from "react"

const fluid = css`
  padding: 0;
  width: 100%;
`

export const Flex = styled(props => <Reflexbox {...props} />)`
  margin: auto;
  flex-wrap: wrap;

  ${props => (props.fluid ? fluid : "padding: 0 26px")};
`
export const Box = styled(props => <PlainBox {...props} />)`
  ${props => props.flex ? 'display: flex' : null}
`
