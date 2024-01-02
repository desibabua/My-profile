import React from "react";
import { Box, Flex, Heading, Text, VStack, useTheme } from "@chakra-ui/react";

const ExperienceSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box mt={theme.sizes.topMargin} mx="auto" maxW="1200px">
      <Flex>
        <VStack align="left" spacing={4} flex="1">
          <Heading fontSize={theme.sizes.heading}>
            Clients I've Worked With @Thoughtworks
          </Heading>
          <Text fontSize={theme.sizes.xl}>Section Needs to be created</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ExperienceSection;
