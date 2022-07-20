import { Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {} 

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ ...rest }, ref: any) => {
  return (
    <>
      <ChakraInput 
        borderColor="elevation"
        focusBorderColor="primary"
        _hover={{
          filter: 'brightness(0.9)'
        }}
        ref={ref}        
        {...rest} 
      />
    </>
  );
};
