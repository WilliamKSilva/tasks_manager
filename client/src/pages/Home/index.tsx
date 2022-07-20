import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import DiaryIlustration from '../../assets/undraw_diary_primary_re_4jpc.svg'; 
import { useHome } from "./useHome";


export default function Home() {
  const { avaiableTasks } = useHome();
  
  return (
    <Box w="100vw" h="100vh" bg="background">
      <Header />
      <VStack as="section" spacing={10} justify="center" align="center" w="100%" h="80%" >
        <Text color="primary" fontWeight="bold" fontSize={{base: '1.3rem', lg: "3xl"}}>You still not have any task created!</Text>
        <Image src={DiaryIlustration} w={300} />
      </VStack>
    </Box>
  )
}