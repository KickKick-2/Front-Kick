import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
axios.defaults.withCredentials = true;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterInfo } from './util/router';
import GlobalStyle from './util/GlobalStyle';
import theme from './util/theme';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider } from 'styled-components';
import GlobalModal from './components/Modal/GlobalModal';
import PacmanLoader from 'react-spinners/PacmanLoader';
import styled from 'styled-components';
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';

const RouterObject = createBrowserRouter(RouterInfo);
const Loaders = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.Suspense
      fallback={
        <Loaders>
          <PacmanLoader color='#1f1f45' size='50' />
        </Loaders>
      }
    >
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <GlobalModal />
          <RouterProvider router={RouterObject} />
        </ThemeProvider>
      </CookiesProvider>
    </React.Suspense>
  </Provider>,
);
