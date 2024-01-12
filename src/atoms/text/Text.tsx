import React from "react";
import Font from "src/styles/Font";
import styled, { css } from "styled-components";

export interface TextProps {
  color?: React.CSSProperties["color"];
  font?: Font;
  size?: React.CSSProperties["fontSize"];
  textAlign?: React.CSSProperties["textAlign"];
}

// 폰트별 letter-spacing 도 추가해야할 수도

const Text = styled.p<TextProps>`
  margin: 0;
  font-weight: inherit;
  ${({ font }) => {
    switch (font) {
      case Font.Bold:
        return css`
          font-family: "Noto Sans KR", sans-serif;
          font-weight: 700;
        `;
      case Font.SemiBold:
        return css`
          font-family: "Noto Sans KR", sans-serif;
          font-weight: 600;
        `;
      case Font.Medium:
        return css`
          font-family: "Noto Sans KR", sans-serif;
          font-weight: 500;
        `;
      default:
        return css`
          font-family: "Noto Sans KR", sans-serif;
          font-weight: 400;
        `;
    }
  }}
  font-size: ${({ size }) => size ?? undefined};
  line-height: 1.2;
  text-align: ${({ textAlign }) => textAlign ?? "inherit"};
  color: ${({ color }) => color ?? "inherit"};
`;

export default Text;
