// src/cms/with-styled.js,  define the higher-order function to support styled

import React from "react";
import { StyleSheetManager } from "styled-components";
import typography from  "../utils/typography"
import { TypographyStyle } from 'react-typography'

export default Component => props => {
  const iframe = document.querySelector("#nc-root iframe");
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <TypographyStyle typography={typography} />
      <Component {...props} />
    </StyleSheetManager>
  );
};