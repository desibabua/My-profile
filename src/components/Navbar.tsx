import React from "react";
import { Flex, Box, Link, Spacer, Button, useTheme } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const theme = useTheme();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
    >
      <Flex align="center" mr={5}>
        <Box>
          <Link href="/">
            <img
              src="/logo192.png"
              alt="Home Logo"
              height="30px"
              width="30px"
            />
          </Link>
        </Box>
      </Flex>

      <Spacer />

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        <Link ml={4} href="/about">
          About
        </Link>
        <Link ml={4} href="/experience">
          Experience
        </Link>
        <Link ml={4} href="/work">
          Work
        </Link>
        <Link ml={4} href="/contact">
          Contact
        </Link>
        <Link ml={4} href="/resume">
          <Button
            ml={4}
            variant="outline"
            color={theme.colors.secondary}
            borderColor={theme.colors.secondary}
            _hover={{ bg: theme.colors.lightSecondary }}
          >
            Resume
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
