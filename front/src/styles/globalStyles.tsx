import { css } from '@emotion/react';
import theme from '@src/styles/theme';

export const globalStyles = css`
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
    background: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  h1 {
    font-size: ${theme.fontSize.h1};
  }

  h3 {
    font-size: ${theme.fontSize.h3};
  }

  input {
    font-size: ${theme.fontSize.input};
    &::placeholder {
      color: ${theme.colors.placeholder};
    }
  }

  #root,
  #__next {
    isolation: isolate;
  }
`;
