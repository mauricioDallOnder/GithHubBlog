import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { Blog } from './pages/Blog';
import { BrowserRouter } from "react-router-dom";
import { BlogPostContextProvider } from './context/context';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <BlogPostContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </BlogPostContextProvider>
  </ChakraProvider>

)
