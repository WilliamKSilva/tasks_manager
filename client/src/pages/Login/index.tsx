import { Box, Flex, FormControl, FormHelperText, FormLabel, Icon, Input, Link, VStack } from "@chakra-ui/react";
import { GiBookCover } from 'react-icons/gi';
import { ButtonDefault } from "../../components/Button";


export default function Login() {
  return (
   <Flex justify="center" bg="background" w="100vw" h="100vh">
     <Box w="75%" marginTop={40}>
      <FormControl as="form">
        <VStack spacing={5}>
          <Flex as="section" align="center" justify="space-around">
            <FormLabel color="white" fontWeight="bold" fontSize="3xl">
              Tasks Manager
            </FormLabel>
            <Icon as={GiBookCover} color="primary" w={10} h={10} />
          </Flex>
          <Input 
            placeholder="E-mail"
            color="white" 
            borderColor="elevation"
            focusBorderColor="primary"
            _hover={{
              filter: 'brightness(0.9)'
            }} 
          />
          <Input 
            placeholder="Password"
            color="white" 
            borderColor="elevation"
            focusBorderColor="primary"
            _hover={{
              filter: 'brightness(0.9)'
            }} 
          />
          <ButtonDefault 
            title="LogIn"
            onClick={() => console.log('teste')}
            type="submit"
          />
        </VStack>
        <FormHelperText>Don't have an account?</FormHelperText>
        <Link href="/register" color="pink.700" textDecor="underline">Register</Link>
      </FormControl>
     </Box>
   </Flex>
  );
}
