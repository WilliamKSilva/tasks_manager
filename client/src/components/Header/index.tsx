import { Box, Flex, Text } from '@chakra-ui/react';
import { ButtonDefault } from '../Button';

export function Header() {
  return (
    <Box 
      as="section"
      w="100%"                   
      borderBottom="1px" 
      borderColor="elevation"       
      padding={5}      
    >
      <Flex justify="space-between" align="center">
        <Text color="white" fontWeight="bold">Your Daily Tasks</Text>
        <ButtonDefault title="New Task" onClick={() => console.log('teste')} />
      </Flex>
    </Box>
  )
}