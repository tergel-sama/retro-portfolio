/* eslint-disable react/no-unescaped-entities */
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import Window from "./Windows";
import Shortcut from "./Shortcut";

import DirNetW from "../assets/directory_net_web-4.png";
import DirE from "../assets/directory_e-5.png";
import FileG from "../assets/notepad_file_gear-2.png";

export default function Contact({ onToggle, isOpen }) {
  return (
    <Window title="Contact links" onToggle={onToggle} isOpen={isOpen}>
      <Box border="0.5px solid #000000" bg="white">
        <Flex>
          <Shortcut bg onToggle={onToggle} title="Facebook" Photo={DirNetW} />
          <Shortcut bg title="Instagram" Photo={DirE} />
          <Shortcut bg title="Github" Photo={FileG} />
        </Flex>
      </Box>
    </Window>
  );
}
