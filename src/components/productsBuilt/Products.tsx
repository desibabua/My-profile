import { Box, Heading, useTheme } from "@chakra-ui/react";
import React from "react";
import Product1 from "./Product1";

const Products: React.FC = () => {
  const theme = useTheme();

  return (
    <Box mt={theme.sizes.sectionMargin} mx="auto" maxW="1200px">
      <Heading fontSize={theme.sizes.subHeading} color={theme.colors.white}>
        Some Things I've Built
      </Heading>
      <Product1 />
    </Box>
  );
};

export default Products;
