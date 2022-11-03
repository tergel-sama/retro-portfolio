/* eslint-disable react/no-unescaped-entities */
import { Flex, Text, Spacer } from "@chakra-ui/react";
import Window from "./Windows";

export default function StartMenu({ onToggle, isOpen }) {
  return (
    <Window title="Start Menu" onToggle={onToggle} isOpen={isOpen}>
      <Flex
        justifyContent="center"
        alignItems="center"
        color="black"
        flexDir="column"
        w="100%"
      >
        <Text mb="20px">I'm tooo lazy to create start menu</Text>
        <Spacer />
        <Flex justifyContent="center">
          <button onClick={onToggle} className="w-[50px]">
            ok
          </button>
        </Flex>
      </Flex>
    </Window>
  );
}
