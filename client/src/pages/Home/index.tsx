import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";


export default function Home() {
  return (
    <Box w="100vw" h="100vh" bg="background">
      <Flex w="100%" justify="center">
        <Header />
      </Flex>
    </Box>
  )
}