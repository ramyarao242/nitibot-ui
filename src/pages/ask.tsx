import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Input, Button, Text, VStack, HStack } from "@chakra-ui/react";

const Ask: React.FC = () => {
  const location = useLocation();
  const initialQuestion = location.state?.initialQuestion as string | undefined;

  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>(
    initialQuestion
      ? [
          { from: "bot", text: "Hello! Ask me anything about Chanakya's wisdom." },
          { from: "user", text: initialQuestion }
        ]
      : [
          { from: "bot", text: "Whisper your career dilemma. I will find you sharpest Chankya verse to guide you." }
        ]
  );
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

     try {
    // Replace with your actual API endpoint and request details
    const url = `https://nitibot-backend.onrender.com/ask-chanakya?question=${encodeURIComponent(input)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();

    // Assuming the API returns { answer: "..." }
    setMessages(msgs => [
      ...msgs,
      { from: "bot", text: data.answer || "Sorry, I couldn't get an answer." }
    ]);
  } catch (error) {
    setMessages(msgs => [
      ...msgs,
      { from: "bot", text: "There was an error contacting the server." }
    ]);
  } 
  };

  return (
    <Box
      minH="100vh"
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={8}
    >
      <Box
       
        w="full"
        maxW="full"
        rounded="lg"
        shadow="lg"
        display="flex"
        flexDirection="column"
        h="100%"
      >
        <VStack flex="1" overflowY="auto" p={4} spacing={3} align="stretch">
          {messages.map((msg, idx) => (
            <HStack
              key={idx}
              justify={msg.from === "user" ? "flex-end" : "flex-start"}
            >
              <Box
                px={4}
                py={2}
                borderRadius="lg"
                maxW="70%"
                bg={msg.from === "user" ? "text6" : "background2"}
                color={msg.from === "user" ? "background6" : "text2"}
                alignSelf={msg.from === "user" ? "flex-end" : "flex-start"}
              >
                <Text>{msg.text}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>
        <HStack p={4} borderTop="1px" borderColor="gray.200" spacing={2}>
          <Input
            flex="1"
            placeholder="Type your question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
            bg="background2"
            color="text2"
          />
          <Button
            colorScheme="yellow"
            bg="buttonBackground6"
            color="buttonText"
            _hover={{ bg: "buttonBackground2" }}
            onClick={handleSend}
          >
            Send
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Ask;