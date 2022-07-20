import { Box, Flex, FormControl, FormLabel, VStack, Input as ChakraInput } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ButtonDefault } from "../../components/Button";
import { useRegister } from "./useRegister";

export default function Register() {
  const { handleSubmit, register } = useForm();
  const { onRegister } = useRegister();

  return (
    <Flex w="100vw" h="100vh" justify="center" bg="background">
      <Box w={{base: '75%', md: '60%', lg: '40%', xl: '20%'}} marginTop={40}>
        <FormLabel color="white" fontWeight="bold" fontSize={{base: '2xl', lg: '4xl'}}>Registration</FormLabel>
        <FormControl as="form" onSubmit={handleSubmit(onRegister)}>
          <VStack spacing={5}>
          <ChakraInput 
            placeholder="E-mail" borderColor="elevation"
            p={{lg: 7}}
            size="lg"
            color="white"
            focusBorderColor="primary"
            _hover={{
              filter: 'brightness(0.9)'
            }} 
            {...register('email')}
          />
          <ChakraInput 
            placeholder="Password" borderColor="elevation"
            p={{lg: 7}}
            size="lg"
            color="white"
            focusBorderColor="primary"
            _hover={{
              filter: 'brightness(0.9)'
            }}
            {...register('password')} 
          />
          <ChakraInput 
            placeholder="Name" borderColor="elevation"
            p={{lg: 7}}
            size="lg"
            color="white"
            focusBorderColor="primary"
            _hover={{
              filter: 'brightness(0.9)'
            }} 
            {...register('name')}
          />
          <Box w={{base: '70%'}}>
            <ButtonDefault type="submit" title="Send" onClick={() => console.log('teste')} />
          </Box>
          </VStack>          
        </FormControl>
      </Box>
    </Flex>
  );
}