import { Box, Flex, Text } from '@chakra-ui/react';
import { ButtonDefault } from '../Button';
import { PopoverTask } from '../PopoverTask';

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
        <PopoverTask />
      </Flex>
    </Box>
  )
}