import React, {useState} from 'react';
import {
  Box,
  Heading
} from '@chakra-ui/core'

export type RightPaneType = {
}
const RightPane = (props: RightPaneType) => {
  const [isEditing, setEditing] = useState<boolean>(false);

  return (
    <Box p={8}>
      <Heading>
        test title
      </Heading>}
      <Box>hogehoge</Box>
    </Box>
  );
};

export default RightPane;
