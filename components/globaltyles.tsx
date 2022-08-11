import '@/assets/antd.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
