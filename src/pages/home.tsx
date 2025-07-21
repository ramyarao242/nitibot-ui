import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Button, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import {FaEnvelope} from 'react-icons/fa';

const features = [
  {
    title: "Chanakya Neeti for the day",
    description: "",
    actionBtn: false,
    lock:false
  },
  {
    title: "Ask Chanakya",
    description: "Ask any question and get wisdom from Chanakya.",
    route: "/ask",
   actionBtn: true,
   lock: false
  },
  {
    title: "Daily Challenge",
    description: "Take on a new challenge every day to sharpen your mind.",
     route: "/challenge",
   actionBtn: true,
   lock: true
  },
  {
    title: "Chanakya Verses Library",
    description: "Read all verses and lessons from Chanakya Neeti.",
    route: "/library",
    actionBtn: true,
    lock: true
  },
  {
    title: "Quiz",
    description: "Test your knowledge with this fast paced quiz.",
    route: "/quiz",
    actionBtn: true,
    lock: true
  },
  {
    title: "Chanakya Chronicles",
    description: "Explore the life and teachings of Chanakya.",
    route: "/chronicles",
    actionBtn: true,
    lock: true
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

  // const handleAsk = () => {
  //   if (!question.trim()) return;
  //   navigate("/ask", { state: { initialQuestion: question } });
  //   setQuestion("");
  // };

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
            {feature.actionBtn && !feature.lock && (
              <Button
                className="action-btn"
                onClick={() => feature.route && navigate(feature.route)}
              >
                Go
              </Button>
            )}
            {feature.lock && (
              <Button 
              leftIcon={<FaEnvelope />}
              colorScheme='red'
              variant={"solid"}
              className="action-btn" 
              onClick={() => {
                const email = prompt("Please enter your email to get notified when this feature is available:");
                if (email) {
                  // Here you would typically send the email to your backend or a service
                  fetch('https://nitibot-backend.onrender.com/notify', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, feature: feature.title })
                  }).then(() => {
                    alert(`Thank you! We'll notify you at ${email} when this feature is available.`);
                  }).catch(() => {
                    alert("There was an error sending your email. Please try again later.");
                  });
                } else {
                  alert("Please enter a valid email address.");
                }

              }}>
                Notify me
              </Button>
            )}
            
            {feature.title === "Chanakya Neeti for the day" && (
              <Box w="full" display="flex" flexDirection="column" alignItems="center" mb="4">
                <Box color="subtitle" textAlign="center">
                  {neetiVerse ? (
                    <>
                      <Box fontWeight="bold" mb="4">Chapter {neetiVerse.chapter} - Verse {neetiVerse.verse}</Box>
                      <Box mb="4">{neetiVerse.sanskrit}</Box>
                      <Box mb="4">{neetiVerse.translation}</Box>
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
