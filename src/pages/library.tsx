import { useEffect, useState } from "react";
import { Box, VStack, Accordion, AccordionButton, AccordionItem, AccordionPanel, Spinner, Heading, Text } from "@chakra-ui/react";

type Verse = {
  chapter: string;
  verse: string;
  text: string;
};

type ChapterGroup = {
  chapter: string;
  verses: Verse[];
};

const Library: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState<ChapterGroup[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVerses = async () => {
      try {
        const res = await fetch("https://nitibot-backend.onrender.com/verses/all-verse");
        const data: Verse[] = await res.json();

        // Group by chapter
        const chapterMap: { [chapter: string]: Verse[] } = {};
        data.forEach(verse => {
          if (!chapterMap[verse.chapter]) chapterMap[verse.chapter] = [];
          chapterMap[verse.chapter].push(verse);
        });

        const grouped: ChapterGroup[] = Object.entries(chapterMap).map(([chapter, verses]) => ({
          chapter,
          verses,
        }));

        setChapters(grouped);
        setLoading(false);
      } catch (err) {
        setError("Failed to load verses.");
        setLoading(false);
      }
    };

    fetchVerses();
  }, []);

  return (
    <Box minH="100vh" bg="background" py={8} px={4}>
      <Heading as="h1" mb={2} color="nitibotTitle" textAlign="center">
        Chanakya Neeti
      </Heading>
      <Text color="text" mb={6} textAlign="center">
        Explore the timeless wisdom of Chanakya through his verses.
      </Text>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minH="40vh">
          <Spinner size="xl" />
        </Box>
      ) : error ? (
        <Text color="red.500" textAlign="center">{error}</Text>
      ) : (
        <Accordion allowMultiple>
          {chapters.map(chapterGroup => (
            <AccordionItem key={chapterGroup.chapter}>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {chapterGroup.chapter}
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack spacing={4} align="stretch">
                  {chapterGroup.verses.map((verse, idx) => (
                    <Box key={idx} p={4} borderWidth={1} borderRadius="md" bg="white">
                      <Heading as="h2" size="sm" mb={2} color="nitibotTitle">
                        {verse.verse}
                      </Heading>
                      <Text color="text">{verse.text}</Text>
                    </Box>
                  ))}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </Box>
  );
};

export default Library;