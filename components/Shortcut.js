import { Box, Flex, Image } from "@chakra-ui/react";
import Draggable from "react-draggable";

export default function Shortcut({ Photo, title, onToggle, bg }) {
  return (
    <Draggable bounds="body">
      <Flex
        onDoubleClick={onToggle}
        p="10px"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Image w="40px" alt="ss" src={Photo?.src} />
        <Box
          mt="2px"
          px="5px"
          bg={!bg ? `#010081` : ""}
          color={!bg ? `white` : "black"}
        >
          {title}
        </Box>
      </Flex>
    </Draggable>
  );
}
