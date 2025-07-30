import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Image, Button, Flex, Text } from "@chakra-ui/react";
import '../styles/header.css'; // Import header specific styles
import chanakyaLogo from '../assets/chanakya-logo.png'; // Adjust the path as necessary

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
          src={chanakyaLogo}
          borderRadius="50%"
          alt="Chanakya Logo"
          h="50px"
          w="50px"
          mr={4}
        />
        <Heading
            className="neetibot-title"
            as="h1"
            textAlign="center"
          >
            NEETIBOT
          </Heading>
        <Box>
        </Box>
      </Flex>

       <Box
     
      alignItems="center"
      justifyContent={"center"}
    >
      <Text color="white" textShadow="0px 0px 10px #b48f20ff" margin="auto" fontSize="md" fontWeight="light">
            Think like Chanakya. Rise like a leader.
      </Text>
      
</Box>
      <div className="header-buttons" style={{ display: 'flex', gap: '10px', marginLeft: '40px', justifyContent: 'center' }}  >
      <Button className="transparent-btn" onClick={() => navigate("/")}><span className="material-symbols-outlined">
home
</span>Home</Button>
        <Button className="transparent-btn" onClick={() => navigate("/ask")}> <span className="material-symbols-outlined">
forum
</span>Ask Chanakya</Button>
      </div>
    </Box>
    )
}

export default Header


//         <Button className="transparent-btn" onClick={() => navigate("/library")}><span className="material-symbols-outlined">
// book_2
// </span> Explore Library</Button>
//         <Button className="transparent-btn" onClick={() => navigate("/quiz")}><span className="material-symbols-outlined">
// quiz
// </span>Quiz</Button>
//         <Button className="transparent-btn" onClick={() => navigate("/chronicles")}><span className="material-symbols-outlined">
// auto_stories
// </span>Chanakya Chronicles</Button>