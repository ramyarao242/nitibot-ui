import React from 'react'
import { Box, Heading, Image } from "@chakra-ui/react";

// Import header specific styles

const Header: React.FC = () => {
  return (
     <Box
      as="header"
      display="flex"
      alignItems="center"
      boxShadow="md"
      p={4}
      bg="background"
    >
      <Image
        src="/assets/chanakya.png"
        alt="Chanakya Logo"
        h="40px"
        w="40px"
        mr={4}
      />
      <Heading as="h1" size="lg" color="nitibotTitle">
        NEETIBOT
      </Heading>
    </Box>
  )
}

export default Header