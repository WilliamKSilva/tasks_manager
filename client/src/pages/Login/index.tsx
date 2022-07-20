import { Box, Flex, FormControl, FormHelperText, FormLabel, Icon, Input, Link, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { GiBookCover } from 'react-icons/gi';
import { ButtonDefault } from "../../components/Button";
import { useLogin } from "./useLogin";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { onLogin } = useLogin();
  
  return (
   <Flex justify="center" bg="background" w="100vw" h="100vh">
     <Box marginTop={40} w={{base: '65%', md: '45%', lg: '40%', xl: '32%'}}>
      <FormControl as="form" onSubmit={handleSubmit(onLogin)}>
        <VStack spacing={5}>
          <Flex as="section" align="center" justify="space-around">
            <FormLabel color="white" fontWeight="bold" fontSize={{base: '2xl', lg: '4xl'}}>
              Tasks Manager
            </FormLabel>
            <Icon as={GiBookCover} color="primary" w={10} h={10} />
          </Flex>
          <Input 
            placeholder="E-mail"  
            id="email"          
            p={{lg: 7}}
            size="lg"
            color="white" 
            borderColor="elevation"
            focusBorderColor="primary"
            _hover={{
              filter: 'brightness(0.9)'
            }}
            {...register('email')} 
          />
          <Input 
            placeholder="Password"
            id="password"
            p={{lg: 7}}
            size="lg"
            color="white" 
            borderColor="elevation"
            focusBorderColor="primary"
            type="password"
            _hover={{
              filter: 'brightness(0.9)'
            }}
            {...register('password')} 
          />
          <ButtonDefault 
            title="LogIn"
            onClick={() => console.log('teste')}
            type="submit"
          />
        </VStack>
        <FormHelperText fontSize={{base: '1rem', md: '1.2rem'}}>Don't have an account?</FormHelperText>
        <Link fontSize={{lg: '1.1rem'}} href="/register" color="pink.700" textDecor="underline">Register</Link>
      </FormControl>
     </Box>
   </Flex>
  );
}
