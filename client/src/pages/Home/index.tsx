import { Box, Image, List, VStack, Text, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import DiaryIlustration from '../../assets/undraw_diary_primary_re_4jpc.svg'; 
import { useHome } from "./useHome";
import { CardTask } from "../../components/CardTask";


export default function Home() {
  const { avaiableTasks } = useHome();
  
  return (
    <Box w="100vw" h="100vh" bg="background">
      <Header />
      <VStack as="section" spacing={10} align="center" justify="center" w="100%" h="80%" >
        {avaiableTasks.length < 1 ? (
          <>
            <Text color="primary" fontWeight="bold" fontSize={{base: '1.3rem', lg: "3xl"}}>You still not have any task created!</Text>
            <Image src={DiaryIlustration} w={300} />
          </>
        ): (
          <List w={{base: '80%', md: '50%', lg: '40%', xl: '30%'}} spacing={5}>
            {avaiableTasks.map((task) => (
              <CardTask 
                title={task.title} 
                description={task.description} 
                key={task.id} 
                id={task.id}
                isActive={task.isActive}
                created_at={task.created_at} 
              />
            ))}
          </List>
        )}
      </VStack>
    </Box>
  )
}