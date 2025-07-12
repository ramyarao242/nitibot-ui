import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Image, Button, Flex, Text, border } from "@chakra-ui/react";
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
      <Flex align="center">
        <Image
          src="/assets/chanakya.png"
          alt="Chanakya Logo"
          h="40px"
          w="40px"
          mr={4}
        />
        <Box>
          <Heading
            as="h1"
            size="lg"
            color="nitibotTitle6"
            textShadow="0px 0px 10px #b48f20ff"
            letterSpacing="wider"
            fontWeight="normal"
          >
            NEETIBOT
          </Heading>
          <Text color="white" textShadow="0px 0px 10px #f5f110ff" marginBottom="20px" fontSize="md" fontWeight="light">
            Explore the timeless wisdom of Chanakya.
          </Text>
        </Box>
      </Flex>

      <div className="header-buttons" style={{ display: 'flex', gap: '10px', marginLeft: '40px' }}  >
        <Button className="transparent-btn" onClick={() => navigate("/ask")}>Ask Chanakya</Button>
        <Button className="transparent-btn" onClick={() => navigate("/library")}>Explore Library</Button>
        <Button className="transparent-btn" onClick={() => navigate("/quiz")}>Quiz</Button>
        <Button className="transparent-btn" onClick={() => navigate("/chronicles")}>Chanakya Chronicles</Button>
      </div>
    </Box>
    )
}

export default Header