import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    background: #2e3440;
  }
  ol, ul {
  list-style: none;
}
/* For images to not be able to exceed their container */
img {
  max-width: 100%;
}
/* removes spacing between cells in tables */
table {
  border-collapse: collapse;
}
/* revert the 'white-space' property for textarea elements on Safari */
textarea {
  white-space: revert;
}
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body, input, textarea, select, button {
  font: 400 1rem "Inter", sans-serif;
}
`;
