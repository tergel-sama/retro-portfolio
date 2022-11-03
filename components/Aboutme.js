/* eslint-disable react/no-unescaped-entities */
import { Flex, Text, Image, Spacer } from "@chakra-ui/react";
import Window from "./Windows";
import Profile from "../assets/profile.jpg";

export default function Aboutme({ onToggle, isOpen }) {
  return (
    <Window
      title="Wow, a whole  win95 window just about me"
      onToggle={onToggle}
      isOpen={isOpen}
    >
      <Flex>
        <Flex flexDir="column" pr="20px">
          <Text>Wassup</Text>
          <Text>
            My name is Tergel and I enjoy creating things that live on the
            internet.
          </Text>
          <br />
          <Text>When I'm not coding, you'll find me malding in sea dota.</Text>
          <Spacer />
          <Flex justifyContent="center">
            <button onClick={onToggle} className="w-[50px]">
              ok
            </button>
          </Flex>
        </Flex>
        <Image alt="wassup" src={Profile?.src} />
      </Flex>
    </Window>
  );
}
