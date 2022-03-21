import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './globalStyles';
import theme from './theme';

import MyRoutes from './routes';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <MyRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
