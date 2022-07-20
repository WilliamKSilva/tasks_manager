import { VStack, Text, ListItem, Flex } from "@chakra-ui/react";


type CardTaskProps = {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  created_at: string;
}

export const CardTask = ({ id, title, description, isActive, created_at }: CardTaskProps) => {

  const createdAtDate = new Date(created_at).toLocaleDateString();

  function handleStatusColor(status: boolean) {
    if (status) {
      return 'green'
    }

    return 'red';
  }

  return (
    <ListItem w="100%" p={5} borderColor="elevation" borderWidth="2px" id={id}>
      <VStack as="section" spacing={2}>
        <Text color="primary">{title}</Text>
        <Text color="white">{description}</Text>
      </VStack>
      <Flex marginTop="1rem" align="center" justify="space-between">
        <Text color="whiteAlpha.400">{createdAtDate}</Text>
        <Text color={handleStatusColor(isActive)}>{isActive ? 'Active' : 'Finished'}</Text>
      </Flex>
    </ListItem>
  );
};
