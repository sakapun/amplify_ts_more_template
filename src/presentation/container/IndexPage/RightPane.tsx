import React from "react";
import { Box, Heading } from "@chakra-ui/core";

export type RightPaneType = {};
const RightPane = (props: RightPaneType) => {
  return (
    <Box p={8}>
      <Heading>test title</Heading>}<Box>hogehoge</Box>
    </Box>
  );
};

export default RightPane;
