/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import {
  SiVim,
  SiJavascript,
  SiGoland,
  SiLinux,
  SiRuby,
  SiCsswizardry,
  SiDocker,
  SiNextdotjs,
  SiReact,
  SiPrisma,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";
import anime from "animejs";

import Window from "./Windows";

export default function Skills({ onToggle, isOpen }) {
  const [isClicked, setIsClicked] = useState(0);
  useEffect(() => {
    const gridskill = anime.timeline({
      autoplay: true,
      delay: 200,
    });
    switch (isClicked) {
      case 0:
        gridskill.add({
          targets: "#gridskill #gitem",
          translateX: anime.stagger(10, {
            grid: [3, 4],
            from: "center",
            axis: "x",
          }),
          translateY: anime.stagger(10, {
            grid: [3, 4],
            from: "center",
            axis: "y",
          }),
          rotateZ: anime.stagger([0, 90], {
            grid: [3, 4],
            from: "center",
            axis: "x",
          }),
          delay: anime.stagger(200, { grid: [3, 4], from: "center" }),
          easing: "easeInOutQuad",
        });
        break;
      case 1:
        gridskill.add({
          targets: "#gridskill #gitem",
          translateX: anime.stagger(10, {
            grid: [3, 4],
            from: "center",
            axis: "x",
          }),
          translateY: anime.stagger(10, {
            grid: [3, 4],
            from: "center",
            axis: "y",
          }),
          rotateZ: anime.stagger([0, 180], {
            grid: [3, 4],
            from: "center",
            axis: "x",
          }),
          delay: anime.stagger(200, { grid: [3, 4], from: "center" }),
          easing: "easeInOutQuad",
        });
        break;
      case 2:
        gridskill.add({
          targets: "#gridskill #gitem",
          translateX: anime.stagger(10, {
            grid: [3, 4],
            from: "center",
            axis: "x",
          }),
          translateY: anime.stagger(10, {
            grid: [3, 4],
            from: "center",
            axis: "y",
          }),
          rotateZ: anime.stagger([0, 270], {
            grid: [3, 4],
            from: "center",
            axis: "x",
          }),
          delay: anime.stagger(200, { grid: [3, 4], from: "center" }),
          easing: "easeInOutQuad",
        });
        break;
      case 3:
        gridskill.add({
          targets: "#gridskill #gitem",
          translateX: anime.stagger(10, {
            grid: [3, 4],
            from: "center",
            axis: "x",
          }),
          translateY: anime.stagger(10, {
            grid: [3, 4],
            from: "center",
            axis: "y",
          }),
          rotateZ: anime.stagger([0, 360], {
            grid: [3, 4],
            from: "center",
            axis: "x",
          }),
          delay: anime.stagger(200, { grid: [3, 4], from: "center" }),
          easing: "easeInOutQuad",
        });
        break;
      default:
        gridskill.add({
          targets: "#gridskill #gitem",
          scale: [
            { value: 0.6, easing: "easeOutSine", duration: 500 },
            { value: 1, easing: "easeInOutQuad", duration: 1200 },
          ],
          delay: anime.stagger(200, { grid: [3, 4], from: "center" }),
        });
    }
  }, [isOpen, isClicked]);

  return (
    <Window
      title="My skills bro i don't think cool and good but hey anyway here"
      onToggle={onToggle}
      isOpen={isOpen}
    >
      <Flex
        onClick={() => {
          let tmp = isClicked;
          setIsClicked(++tmp);
        }}
        p="30px"
      >
        <SimpleGrid id="gridskill" columns={4} spacing={10}>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiJavascript size={74} />
            <Text mt="10px" color="black">
              true or false ?
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiGoland size={74} />
            <Text mt="10px" color="black">
              goroutine and channel?
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiRuby size={74} />
            <Text mt="10px" color="black">
              ruby on rails?
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiCsswizardry size={74} />
            <Text mt="10px" color="black">
              how to center
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiDocker size={74} />
            <Text mt="10px" color="black">
              ohh i forget -d
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiNextdotjs size={74} />
            <Text mt="10px" color="black">
              Server-Side what?
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiReact size={74} />
            <Text mt="10px" color="black">
              virtual dom
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiPrisma size={74} />
            <Text mt="10px" color="black">
              schema.prisma
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiNodedotjs size={74} />
            <Text mt="10px" color="black">
              backend js
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiPostgresql size={74} />
            <Text mt="10px" color="black">
              run out idea
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiLinux size={74} />
            <Text mt="10px" color="black">
              btw i use arch
            </Text>
          </Flex>
          <Flex
            id="gitem"
            p="5px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <SiVim size={74} />
            <Text mt="10px" color="black">
              How to exit
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Window>
  );
}
