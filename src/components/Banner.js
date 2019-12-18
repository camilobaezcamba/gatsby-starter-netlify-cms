import styled, { css } from "styled-components"

const fullscreen = css`
  height: 100vh;
`

const halfscreen = css`
  height: 85vh;
`

const WINDOW = typeof window !== 'undefined' ? window.innerWidth : "2000";

export default styled.div`
  width: 100%;
  ${props => (props.fullscreen ? fullscreen : null)};
  ${props => (props.halfscreen ? halfscreen : null)};
  background: rgb(255, 216, 0);
  padding: ${props => (props.fullscreen || props.halfscreen ? "0" : "8rem 0 10rem 0")};
  background: ${props =>
    props.bg
      ? `url(${props.bg}) no-repeat center center`
      : "linear-gradient(135deg,rgba(255, 216, 0, 1) 0%, rgba(255, 119, 0, 1) 100%)"};
  box-shadow: ${props =>
    props.overlay ? "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)" : "0"};
  display: flex;
  background-size: cover;
  ${props =>
    props.overlay
      ? `box-shadow:inset 0 0 0 ${WINDOW}px rgba(0, 0, 0, 0.3)`
      : null}
  padding: ${props => (props.fullscreen ? `0` : `8rem 0 10rem 0`)};
`
