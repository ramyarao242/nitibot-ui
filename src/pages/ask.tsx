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
          { from: "bot", text: "Hello! Ask me anything about Chanakya's wisdom." }
        ]
  );
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    // Simulate bot reply (replace with real logic or API call)
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: "bot", text: "This is a sample answer from Chanakya Bot." }
      ]);
    }, 800);
    setInput("");
  };

  return (
    <Box
      minH="100vh"
      bg="background"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={8}
    >
      <Box
        bg="white"
        w="full"
        maxW="md"
        rounded="lg"
        shadow="lg"
        display="flex"
        flexDirection="column"
        h="70vh"
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
                bg={msg.from === "user" ? "buttonBackground" : "background2"}
                color={msg.from === "user" ? "buttonText" : "text2"}
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
            bg="buttonBackground"
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