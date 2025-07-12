import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, Heading, Input, Text, SimpleGrid } from '@chakra-ui/react';

const features = [
  {
    title: "Chanakya Neeti for the day",
    description: "Take on a new challenge every day to sharpen your mind.",
    route: "/challenge",
  },
  {
    title: "Daily Challenge",
    description: "Take on a new challenge every day to sharpen your mind.",
    route: "/challenge",
  },
  {
    title: "Ask Chanakya",
    description: "Ask any question and get wisdom from Chanakya.",
    route: "/ask",
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
  {
    title: "Chanakya Chronicles",
    description: "Explore the life and teachings of Chanakya.",
    route: "/chronicles",
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
      py={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
    
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" maxW="80%">
        {features.map((feature) => (
          <Text as ="div"
          className='transparent-btn'
            key={feature.title}
            p={10}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Heading as="h2" size="md" mb={2} color="title" fontWeight={"normal"}>
              {feature.title}
            </Heading>
            <Text color="subtitle" mb={4} textAlign="center">
              {feature.description}
            </Text>
            {feature.title === "Ask Chanakya" ? (
              <Box w="full" display="flex" flexDirection="column" alignItems="center"  bg="background">
                <Input
                  placeholder="Type your question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  mb={2}
                  className='action-btn'
                />
                <Button
                  className='action-btn'
                  w={"full"}
                  onClick={handleAsk}
                >
                  Ask
                </Button>
              </Box>
            ) : (
              <Button
                className='action-btn'
                onClick={() => navigate(feature.route)}
              >
                Go
              </Button>
            )}
          </Text>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;