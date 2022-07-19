import { Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

export const Input = ({ ...rest }: ChakraInputProps) => {
  return (
    <>
      <ChakraInput 
        borderColor="elevation"
        focusBorderColor="primary"
        _hover={{
          filter: 'brightness(0.9)'
        }}
        {...rest} 
      />
    </>
  );
};
