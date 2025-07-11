import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Image, Button } from "@chakra-ui/react";

// Import header specific styles

const Header: React.FC = () => {

const navigate = useNavigate();

  return (
     <Box
      as="header"
     
      alignItems="center"
      boxShadow="md"
      p={4}
      bg="background"
    >
    <div style={{  display: "flex" }}>
     <Image
        src="/assets/chanakya.png"
        alt="Chanakya Logo"
        h="40px"
        w="40px"
        mr={4}
      />
      <Heading as="h1" size="lg" color="nitibotTitle">
        WELCOME TO NEETIBOT
        <p>Explore the timeless wisdom of Chanakya.</p>
      </Heading>
      {/* <Button ml={4} colorScheme="teal">Get Started</Button> */}
      {/* <Button ml={4} colorScheme="blue">Login</Button> */}
      {/* <Button ml={4} colorScheme="green">Sign Up</Button> */}
    </div>

      <Button  onClick={() => navigate("/library")}>Explore Library</Button>
      <Button ml={4} colorScheme="teal" onClick={() => navigate("/ask")}>Ask Chanakya</Button>
      <Button ml={4} colorScheme="teal" onClick={() => navigate("/quiz")}>Quiz</Button>
      <Button ml={4} colorScheme="teal" onClick={() => navigate("/chronicles")}>Chanakya Chronicles</Button>
    </Box>
  )
}

export default Header