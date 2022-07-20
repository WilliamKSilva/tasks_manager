import { Box, Flex, Text } from '@chakra-ui/react';
import { PopoverTask } from '../PopoverTask';

const Header = () => {
  return (
    <Box       
      w="100%"                   
      borderBottom="1px" 
      borderColor="elevation"       
      padding={4}      
    >
      <Flex as="section" justify={{base: 'space-between', sm: 'center'}} align="center" w="100%" gap={{sm: '40%'}}>
        <Text color="white" fontWeight="bold" fontSize={{md: '2xl'}}>Your Daily Tasks</Text>
        <PopoverTask />
      </Flex>
    </Box>
  )
}

export { Header };