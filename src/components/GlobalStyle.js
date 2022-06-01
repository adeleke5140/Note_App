import * as styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
  }

  :root{
    --bg-color: #fdf9ee;
    --primary-color: #500740;
    --button-color: #fff1d7;

  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    background-color: var(--bg-color);
    line-height: 1.4;
    font-family: var(--font-family1)
  }

  button, input{
    font-family: var(--font-family1);
  }

  button:focus-visible{
    border: 1px solid var(--primary-color);
    outline-offset: 4px;
  }

  form label input:focus:not(:focus-visible){
    outline: none;
  }

  /* input:focus-visible{
    outline: none;
  } */

  a:link,
  a:visited {
    color: var(--primary-color);
  }

  a:hover,
  a:focus {
    color: var(--primary-color);
  }

  .form-title{
    color: var(--primary-color);
  }

  .navigable-link{
    text-decoration: none;
    padding: 0.6em;
    color: var(--primary-color);
    border: 1px solid var(--primary-color)
  }

 
  a.navigable-link:first-child{
    margin-right: 2em;
  }
  
   @media(max-width: 467px){
    .navigable-link{
      padding: 0.3em;
    }

    a.navigable-link:first-child{
    margin-right: .6em;
    }

    .header-logo{
      width: 1em;
      height: 1em
    }
  }

  .navigable-link:hover{
    background-color: var(--primary-color);
    color: var(--bg-color)
  }

  code,
  pre {
    max-width: 100%;
  }
`;
