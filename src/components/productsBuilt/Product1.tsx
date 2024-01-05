import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useTheme,
} from "@chakra-ui/react";

const Product1: React.FC = () => {
  const theme = useTheme();

  return (
    <Box mt={theme.sizes.subSectionMargin} mx="auto" maxW="1200px">
      <Flex>
        <VStack align="left" spacing={4} flex="1" fontSize={theme.sizes.l}>
          <Heading fontSize={theme.sizes.subHeading} color={theme.colors.white}>
            Profile Page
          </Heading>
          <Text>
            Hello! I'm Ayush kumar, an engineer at core who loves creating stuff
            that improves life. As a student, I was particularly fascinated by
            software development after seeing what a single line of code can do
            at scale (at that time I didn't know how much code runs behind it).
          </Text>
          <Text>
            Fast-forward to career life,and I was fortunate to learn programming
            fundamentals, teamwork and methodologies like Agile, TDD with the
            help of great mentors in STEP Internship. During Internship, along
            with programming concepts mentors immensely focused on teamwork,
            soft skills and personal growth. After Internship, I have worked
            with multiple MNC clients in finance and transportation domain and
            helped them reach their goal with User-friendly and highly efficient
            Web applications.
          </Text>
          <Text>
            Here are a few technologies I've been working with recently:
          </Text>
        </VStack>

        <Center flex="1">
          <Image src="/images/profilePage.png" alt="Your Photo" />
        </Center>
      </Flex>
    </Box>
  );
};

export default Product1;
