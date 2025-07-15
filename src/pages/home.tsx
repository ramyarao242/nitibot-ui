import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Button, Heading, Input, Text, SimpleGrid } from '@chakra-ui/react';

const features = [
  {
    title: "Chanakya Neeti for the day",
    description: "",
    actionBtn: false,
  },
  {
    title: "Daily Challenge",
    description: "Take on a new challenge every day to sharpen your mind.",
    actionBtn: false,
  },
  {
    title: "Ask Chanakya",
    description: "Ask any question and get wisdom from Chanakya.",
    route: "/ask",
    actionBtn: false,
  },
  {
    title: "Chanakya Verses Library",
    description: "Read all verses and lessons from Chanakya Neeti.",
    route: "/library",
    actionBtn: true,
  },
  {
    title: "Quiz",
    description: "Test your knowledge with this fast paced quiz.",
    route: "/quiz",
    actionBtn: true,
  },
  {
    title: "Chanakya Chronicles",
    description: "Explore the life and teachings of Chanakya.",
    route: "/chronicles",
    actionBtn: true,
  },
];

interface NeetiVerse{
   "date": string;
   "chapter": string;
   "verse": string;
   "sanskrit": string;
   "translation": string;
   "tag": string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [neetiVerse, setNeetiVerse] = useState<NeetiVerse | null>(null);

  useEffect(() => {
    // Fetch the Neeti verse for the day
    const fetchNeetiVerse = async () => {
      const response = await fetch('https://nitibot-backend.onrender.com/neeti-of-the-day');
      const data = await response.json();
      setNeetiVerse(data);
      console.log("neetiVerse",data);
    };

    fetchNeetiVerse();
  }, []);

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
          <Text
            as="div"
            className="transparent-btn"
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
            {feature.actionBtn && (
              <Button
                className="action-btn"
                onClick={() => feature.route && navigate(feature.route)}
              >
                Go
              </Button>
            )}
            {feature.title === "Ask Chanakya" ? (
              <Box w="full" display="flex" flexDirection="column" alignItems="center" bg="background">
                <Input
                  placeholder="Type your question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  mb={2}
                  className="action-btn"
                />
                <Button
                  className="action-btn"
                  w={"full"}
                  onClick={handleAsk}
                >
                  Ask
                </Button>
              </Box>
            ) : null}
            {feature.title === "Chanakya Neeti for the day" && (
              <Box w="full" display="flex" flexDirection="column" alignItems="center">
                <Box color="subtitle" textAlign="center">
                  {neetiVerse ? (
                    <>
                      <Box fontWeight="bold">{neetiVerse.chapter} - {neetiVerse.verse}</Box>
                      <Box>{neetiVerse.sanskrit}</Box>
                      <Box>{neetiVerse.translation}</Box>
                    </>
                  ) : (
                    <Box>Loading Neeti verse...</Box>
                  )}
                </Box>
              </Box>
            )}
          </Text>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
