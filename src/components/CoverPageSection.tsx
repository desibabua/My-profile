import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  useTheme,
} from "@chakra-ui/react";

const CoverPageSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box mt="70px" mx="auto" maxW="1200px">
      <Flex>
        <VStack align="left" spacing={4} flex="1">
          <Text color={theme.colors.secondary}>Hi, my name is</Text>
          <Heading fontSize={theme.sizes.title} color={theme.colors.white}>
            Ayush Kumar.
          </Heading>
          <Heading fontSize={theme.sizes.subTitle} color={theme.colors.grey}>
            I build digital experiences.
          </Heading>
          <Text>
            I'm a software engineer specialised in building user friendly and
            highly efficient web and mobile applications.
          </Text>

          <Link href="/getInTouch">
            <Button
              variant="outline"
              color={theme.colors.secondary}
              borderColor={theme.colors.secondary}
              padding={theme.sizes.xxl}
              _hover={{ bg: theme.colors.lightSecondary }}
            >
              Get In Touch
            </Button>
          </Link>
        </VStack>

        <Center flex="1">
          <Image
            src="/images/developer.svg"
            alt="Ayush Kumar"
            boxSize="300px"
          />
        </Center>
      </Flex>
    </Box>
  );
};

export default CoverPageSection;
