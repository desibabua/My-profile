import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

const GetInTouch: React.FC = () => {
  const theme = useTheme();
  return (
    <Box mt="200px" mx="auto" maxW="600px">
      <Flex>
        <VStack align="center" spacing={4} flex="1">
          <Text color={theme.colors.secondary}>What's Next?</Text>
          <Heading fontSize={theme.sizes.heading} color={theme.colors.white}>
            Get In Touch
          </Heading>
          <Text align="center" mb="40px">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </Text>

          <Link href="/sayHello">
            <Button
              variant="outline"
              color={theme.colors.secondary}
              borderColor={theme.colors.secondary}
              padding={theme.sizes.xxl}
              _hover={{ bg: theme.colors.lightSecondary }}
            >
              Say Hello
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default GetInTouch;
