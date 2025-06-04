import { Box, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      w="full"
      bg="background"
      textAlign="center"
      py={4}
      mt="auto"
      boxShadow="inner"
    >
      <Text color="text" fontSize="sm">
        © Nalanda 2025
      </Text>
    </Box>
  );
};

export default Footer;