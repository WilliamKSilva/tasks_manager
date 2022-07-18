import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    primary: '#6B4E71',
    background: '#252323',
    elevation: '#353535',    
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
})