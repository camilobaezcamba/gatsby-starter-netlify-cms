// src/cms/with-styled.js,  define the higher-order function to support styled

import React from "react";
import { StyleSheetManager } from "styled-components";
import "../utils/typography"
export default Component => props => {
  const iframe = document.querySelector("#nc-root iframe");
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <Component {...props} />
    </StyleSheetManager>
  );
};