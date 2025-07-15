import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Image, Button, Flex, Text, border, AlertIcon } from "@chakra-ui/react";
// import { color } from 'framer-motion';
import '../styles/header.css'; // Import header specific styles
import { div, style } from 'framer-motion/client';

// Import header specific styles

const Header: React.FC = () => {

  const navigate = useNavigate();

  return (
    <Box
      as="header"
      alignItems="center"
      boxShadow="md"
      p={4}
    >
      <Flex align="center" justify="center" maxW="100%" mx="auto" w="full">
        <Image
          src="/assets/chanakya.png"
          alt="Chanakya Logo"
          h="40px"
          w="40px"
          mr={4}
        />
        <Box>
          <Heading
            className="neetibot-title"
            as="h1"
            align="center"
          >
            NEETIBOT
          </Heading>
          <Text color="white" textShadow="0px 0px 10px #b48f20ff" marginBottom="20px" fontSize="md" fontWeight="light">
            Explore the timeless wisdom of Chanakya.
          </Text>
        </Box>
      </Flex>

      <div className="header-buttons" style={{ display: 'flex', gap: '10px', marginLeft: '40px', justifyContent: 'center' }}  >
      <Button className="transparent-btn" onClick={() => navigate("/")}><span className="material-symbols-outlined">
home
</span>Home</Button>
        <Button className="transparent-btn" onClick={() => navigate("/ask")}> <span className="material-symbols-outlined">
forum
</span>Ask Chanakya</Button>
        <Button className="transparent-btn" onClick={() => navigate("/library")}><span className="material-symbols-outlined">
book_2
</span> Explore Library</Button>
        <Button className="transparent-btn" onClick={() => navigate("/quiz")}><span className="material-symbols-outlined">
quiz
</span>Quiz</Button>
        <Button className="transparent-btn" onClick={() => navigate("/chronicles")}><span className="material-symbols-outlined">
auto_stories
</span>Chanakya Chronicles</Button>
      </div>
    </Box>
    )
}

export default Header