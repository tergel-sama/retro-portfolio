import { Box, Flex, Image } from "@chakra-ui/react";
import StartImg from "../assets/start-button.png";

export default function Footer({ onToggle }) {
  return (
    <Flex
      pos="absolute"
      w="100vw"
      bottom="0"
      boxShadow="inset 1px 0 #fff"
      p="2px"
      borderTop="1px solid #f4f4f4"
      borderBottom="1px solid #4e4e4e"
      bg="#c3c3c3"
      h="30px"
    >
      <button onClick={onToggle}>
        <Box _active={{ pl: "0px" }} pl="14px">
          <Image alt="desu" src={StartImg?.src} />
        </Box>
      </button>
    </Flex>
  );
}
