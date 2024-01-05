import React from "react";
import { Box, Flex, Heading, VStack, useTheme } from "@chakra-ui/react";
import ExperienceContent from "./ExperienceContent";

const ExperienceSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box mt={theme.sizes.sectionMargin} mx="auto" maxW="1200px">
      <Flex>
        <VStack align="left" spacing={4} flex="1">
          <Heading fontSize={theme.sizes.subHeading} color={theme.colors.white}>
            Clients I've Worked With @Thoughtworks
          </Heading>
          <ExperienceContent />
        </VStack>
      </Flex>
    </Box>
  );
};

export default ExperienceSection;
