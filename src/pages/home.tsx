import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, Heading, Input, Text, SimpleGrid } from '@chakra-ui/react';

const features = [
  {
    title: "Ask Chanakya",
    description: "Ask any question and get wisdom from Chanakya.",
    route: "/ask",
  },
  {
    title: "Daily Challenge",
    description: "Take on a new challenge every day to sharpen your mind.",
    route: "/challenge",
  },
  {
    title: "Chanakya Verses Library",
    description: "Read all verses and lessons from Chanakya Neeti.",
    route: "/library",
  },
  {
    title: "Quiz",
    description: "Test your knowledge with this fast paced quiz.",
    route: "/quiz",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');

  const handleAsk = () => {
    if (!question.trim()) return;
    navigate("/ask", { state: { initialQuestion: question } });
    setQuestion("");
  };

  return (
    <Box
      minH="100vh"
      bg="background"
      py={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
    
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full" maxW="4xl">
        {features.map((feature) => (
          <Box
            key={feature.title}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            p={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Heading as="h2" size="md" mb={2} color="nitibotTitle">
              {feature.title}
            </Heading>
            <Text color="text" mb={4} textAlign="center">
              {feature.description}
            </Text>
            {feature.title === "Ask Chanakya" ? (
              <Box w="full" display="flex" flexDirection="column" alignItems="center">
                <Input
                  placeholder="Type your question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  mb={2}
                  bg="background2"
                  color="text2"
                />
                <Button
                  w="full"
                  bg="buttonBackground"
                  color="buttonText"
                  _hover={{ bg: "buttonBackground2" }}
                  onClick={handleAsk}
                >
                  Ask
                </Button>
              </Box>
            ) : (
              <Button
                bg="buttonBackground"
                color="buttonText"
                _hover={{ bg: "buttonBackground2" }}
                onClick={() => navigate(feature.route)}
              >
                Go
              </Button>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;