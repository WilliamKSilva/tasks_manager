import { Box, Flex, FormControl, FormLabel, VStack, Input as ChakraInput } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ButtonDefault } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRegister } from "./useRegister";


export default function Register() {
  const { handleSubmit, register } = useForm();
  const { onRegister } = useRegister();

  return (
    <Flex w="100vw" h="100vh" justify="center" bg="background">
      <Box w="75%" marginTop={40}>
        <FormLabel color="white" fontSize="2xl">Registration</FormLabel>
        <FormControl as="form" onSubmit={handleSubmit(onRegister)}>
          <VStack spacing={5}>
          <Input 
            placeholder="E-mail" borderColor="elevation"
            color="white"
            focusBorderColor="primary"
            _hover={{
              filter: 'brightness(0.9)'
            }} 
            {...register('email')}
          />
          <Input 
            placeholder="Password" borderColor="elevation"
            color="white"
            focusBorderColor="primary"
            _hover={{
              filter: 'brightness(0.9)'
            }}
            {...register('password')} 
          />
          <ButtonDefault type="submit" title="Send" onClick={() => console.log('teste')} />
          </VStack>          
        </FormControl>
      </Box>
    </Flex>
  );
}