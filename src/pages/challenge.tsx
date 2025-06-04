import { Box, Heading, Text } from "@chakra-ui/react";

const Challenge: React.FC = () => {
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
          Daily Challenge
        </Heading>
        <Text color="text" fontSize="lg" textAlign="center">
          Take on a new challenge every day to sharpen your mind!
        </Text>
      </Box>
    </Box>
  );
};

export default Challenge;