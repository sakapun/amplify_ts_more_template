import React from "react";
import { Grid, Box, List, ListItem, Link } from "@chakra-ui/core";
import RightPane from "./RightPane";

type IndexPageType = {};
const IndexPageComponent = () => {
  return (
    <Grid
      templateColumns="30% 1fr"
      gap={0}
      height="100%"
      templateRows="100%"
      p={0}
    >
      <Box p={0}>
        <List p={8} styleType="none" height="100%" overflowY="auto">
          <ListItem h={12}>
            <Link as={"div"}>aaa vbbb</Link>
          </ListItem>
        </List>
      </Box>
      <RightPane />
    </Grid>
  );
};

export const IndexPage = () => {
  return <IndexPageComponent />;
};
