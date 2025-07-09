import { Box, VStack, Accordion , AccordionButton, AccordionItem, AccordionPanel} from "@chakra-ui/react";
import React from "react";
import "../styles/library.css"; // Import your CSS file for styling

const Library: React.FC = () => {
  return (
    <div className="library-container">
      <h1>Chanakya Neeti</h1>
      <p>Explore the timeless wisdom of Chanakya through his verses.</p>
      <div className="verses-container">
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Chapter 1: "The world's biggest power is the youth and beauty of a woman."
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack  spacing={4} align="stretch">
                <Box p={4} borderWidth={1} borderRadius="md">
                <h2>Verse 1</h2>
                <p>"The world's biggest power is the youth and beauty of a woman."</p>
                </Box>
                <Box p={4} borderWidth={1} borderRadius="md">
                <h2>Verse 2</h2>
                <p>"The world's biggest power is the youth and beauty of a woman."</p>
                </Box>
            </VStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Chapter 2: "The world's biggest power is the youth and beauty of a woman."
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
             <VStack  spacing={4} align="stretch">
                <Box p={4} borderWidth={1} borderRadius="md">
                <h2>Verse 1</h2>
                <p>"The world's biggest power is the youth and beauty of a woman."</p>
                </Box>
                <Box p={4} borderWidth={1} borderRadius="md">
                <h2>Verse 2</h2>
                <p>"The world's biggest power is the youth and beauty of a woman."</p>
                </Box>
            </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Library;