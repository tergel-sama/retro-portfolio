/* eslint-disable react/no-unescaped-entities */
import { Flex, Text, Image, Spacer, Box } from "@chakra-ui/react";
import Window from "./Windows";
import Profile from "../assets/profile.jpg";

export default function EditorAndTerminal({ onToggle, isOpen }) {
  return (
    <Window
      title="Editor and Terminal btw i like ricing"
      onToggle={onToggle}
      isOpen={isOpen}
    >
      <Box color="black">
        <ul>
          <li>Editor - VSCode with VIM extension</li>
          <li>Color Theme - Dark Blood</li>
          <li>Coding Font - Terminus</li>
          <li>Terminal - Alacrity</li>
        </ul>
      </Box>
    </Window>
  );
}
