/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDisclosure, Box, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";
import Aboutme from "../components/Aboutme";

import Folder from "../assets/folder.png";
import Exp from "../assets/explorer.png";
import Dire from "../assets/directx.png";
import Game from "../assets/game_freecell.png";
import Bin from "../assets/recycle_bin_full.png";
import Contact from "../components/Contact";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const [isContact, setContact] = useState(false);

  return (
    <Box h="100vh" bg="#008080">
      <Flex w="100px" flexDir="column">
        <Shortcut onToggle={onToggle} title="About me" Photo={Folder} />
        <Shortcut
          onToggle={() => setContact(!isContact)}
          title="Contact me"
          Photo={Exp}
        />
        <Shortcut title="Skill" Photo={Dire} />
        <Shortcut title="Fav" Photo={Game} />
        <Shortcut title="Recycle bin" Photo={Bin} />
      </Flex>
      <Aboutme onToggle={onToggle} isOpen={isOpen} />
      <Contact onToggle={() => setContact(!isContact)} isOpen={isContact} />
      <Footer />
    </Box>
  );
}
