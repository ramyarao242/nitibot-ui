import { Box, Heading, Text } from "@chakra-ui/react";

const Quiz: React.FC = () => {
  return (
    <Box
      minH="100vh"
      bg="background"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={8}
    >
      <Box
        bg="white"
        p={8}
        rounded="lg"
        shadow="md"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h1" size="lg" mb={4} color="nitibotTitle">
          Quiz
        </Heading>
        <Text color="text" fontSize="lg" textAlign="center">
          Welcome to the Quiz page! Here you can test your knowledge.
        </Text>
      </Box>
    </Box>
  );
};

export default Quiz;