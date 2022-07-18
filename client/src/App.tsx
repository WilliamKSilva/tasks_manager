import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/global'
import {
  BrowserRouter,
} from "react-router-dom";
import Router from './routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
