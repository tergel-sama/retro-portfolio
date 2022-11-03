/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useDisclosure, Box, Flex, Image } from "@chakra-ui/react";
import anime from "animejs";

import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";
import Aboutme from "../components/Aboutme";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import EditorAndTerminal from "../components/EditorAndTerminal";
import StartMenu from "../components/StartMenu";

import Folder from "../assets/folder.png";
import Exp from "../assets/explorer.png";
import Dire from "../assets/directx.png";
import Game from "../assets/game_freecell.png";
import Bin from "../assets/recycle_bin_full.png";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const [isContact, setContact] = useState(false);
  const [isSkill, setSkill] = useState(false);
  const [isE, setE] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [workC, setWorkC] = useState(0);

  useEffect(() => {
    const workAnimation = anime.timeline({
      autoplay: true,
      delay: 200,
    });

    switch (workC) {
      case 1:
        workAnimation.add({
          targets: "#work",
          translateX: 250,
        });
        break;
      case 2:
        workAnimation.add({
          targets: "#work",
          keyframes: [
            { translateY: -40 },
            { translateX: 250 },
            { translateY: 40 },
            { translateX: 0 },
            { translateY: 0 },
          ],
          duration: 2000,
        });
        break;
      case 3:
        workAnimation.add({
          targets: "#work",
          translateX: 300,
          translateY: function (el, i) {
            return 50 + -50 * i;
          },
          scale: function (el, i, l) {
            return l - i + 0.25;
          },
          rotate: function () {
            return anime.random(-360, 360);
          },
          borderRadius: function () {
            return ["50%", anime.random(10, 35) + "%"];
          },
          duration: function () {
            return anime.random(1200, 1800);
          },
          delay: function () {
            return anime.random(0, 400);
          },
          direction: "alternate",
        });
        break;
      case 4:
        workAnimation.add({
          targets: "#work",
          translateX: 200,
          translateY: function (el, i) {
            return 50 + -50 * i;
          },
          scale: function (el, i, l) {
            return l - i + 0.25;
          },
          rotate: function () {
            return anime.random(-360, 360);
          },
          borderRadius: function () {
            return ["50%", anime.random(10, 35) + "%"];
          },
          duration: function () {
            return anime.random(1200, 1800);
          },
          delay: function () {
            return anime.random(0, 400);
          },
          direction: "alternate",
        });
        break;
      case 5:
        workAnimation.add({
          targets: "#work",
          translateX: 500,
          translateY: function (el, i) {
            return 50 + -50 * i;
          },
          scale: function (el, i, l) {
            return l - i + 0.25;
          },
          rotate: function () {
            return anime.random(-360, 360);
          },
          borderRadius: function () {
            return ["50%", anime.random(10, 35) + "%"];
          },
          duration: function () {
            return anime.random(1200, 1800);
          },
          delay: function () {
            return anime.random(0, 400);
          },
          direction: "alternate",
        });
        break;
      case 6:
        workAnimation.add({
          targets: "#work",
          translateX: 600,
          translateY: 500,
          scale: function (el, i, l) {
            return l - i + 0.25;
          },
          rotate: function () {
            return anime.random(-360, 360);
          },
          borderRadius: function () {
            return ["50%", anime.random(10, 35) + "%"];
          },
          duration: function () {
            return anime.random(1200, 1800);
          },
          delay: function () {
            return anime.random(0, 400);
          },
          direction: "alternate",
        });
        break;
      case 7:
        workAnimation.add({
          targets: "#work",
          translateX: 800,
          translateY: 300,
          scale: function (el, i, l) {
            return l - i + 0.25;
          },
          rotate: function () {
            return anime.random(-360, 360);
          },
          borderRadius: function () {
            return ["50%", anime.random(10, 35) + "%"];
          },
          duration: function () {
            return anime.random(1200, 1800);
          },
          delay: function () {
            return anime.random(0, 400);
          },
          direction: "alternate",
        });
        break;
      case 8:
        workAnimation.add({
          targets: "#work",
          translateX: 800,
          translateY: -100,
          scale: function (el, i, l) {
            return l - i + 0.25;
          },
          rotate: function () {
            return anime.random(-360, 360);
          },
          borderRadius: function () {
            return ["50%", anime.random(10, 35) + "%"];
          },
          duration: function () {
            return anime.random(1200, 1800);
          },
          delay: function () {
            return anime.random(0, 400);
          },
          direction: "alternate",
        });
        break;
      case 9:
        workAnimation.add({
          targets: "#work",
          keyframes: [{ translateX: 0 }, { translateY: 0 }],
          duration: 1300,
        });
        break;
      default:
        workC !== 0 &&
          workAnimation.add({
            targets: "#work",
            width: {
              value: "-=40px", // 28 - 20 = '8px'
              duration: 1000,
              easing: "easeInOutSine",
            },
            rotate: {
              value: "+=2turn", // 0 + 2 = '2turn'
              duration: 1000,
              easing: "easeInOutSine",
            },
          });
    }
  }, [workC]);

  return (
    <Box h="100vh" bg="#008080">
      <Flex w="100px" flexDir="column">
        <Shortcut onToggle={onToggle} title="About me" Photo={Folder} />
        <Shortcut
          onToggle={() => setContact(!isContact)}
          title="Contact me"
          Photo={Exp}
        />
        <Shortcut
          onToggle={() => setSkill(!isSkill)}
          title="Skills"
          Photo={Dire}
        />
        <Box
          onDoubleClick={() => {
            let tmp = workC;
            setWorkC(++tmp);
          }}
          id="work"
        >
          <Flex
            p="10px"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Image w="40px" alt="ss" src={Game?.src} />
            <Box mt="2px" px="5px" bg={`#010081`} color={`white`}>
              Works
            </Box>
          </Flex>
        </Box>
        <Shortcut onToggle={() => setE(!isE)} title="Recycle bin" Photo={Bin} />
      </Flex>
      <Aboutme onToggle={onToggle} isOpen={isOpen} />
      <Contact onToggle={() => setContact(!isContact)} isOpen={isContact} />
      <Skills onToggle={() => setSkill(!isSkill)} isOpen={isSkill} />
      <EditorAndTerminal onToggle={() => setE(!isE)} isOpen={isE} />
      <StartMenu onToggle={() => setIsStart(!isStart)} isOpen={isStart} />
      <Footer onToggle={() => setIsStart(!isStart)} />
    </Box>
  );
}
