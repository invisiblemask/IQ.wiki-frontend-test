"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

interface CarouselProps {
  slides: { name: string; image: string }[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const prev = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent((current) =>
      current !== slides.length - 1 ? current + 1 : current - 1
    );
  };

  return (
    <Box
      overflow={["hidden"]}
      display={["none", "block"]}
      position={["relative"]}
      pl={["4"]}
      py={["6"]}
    >
      <div
        className="flex transition-transform ease-out duration-500 gap-3 pr-2"
        style={{ transform: `translateX(-${current * 20}%)` }}
      >
        {slides.map((slide, index) => (
          <Flex
            key={index}
            flexDirection="column"
            gap="4px"
            alignItems="center"
          >
            <Box
              borderRadius="full"
              bgGradient="linear(to-b, #DE0046, #F7A34B)"
              p="2px"
              minWidth="max"
            >
              <Box
                bgColor="white"
                height="full"
                width="full"
                borderRadius="full"
                p="2px"
              >
                <Image
                  src={slide.image}
                  alt="story"
                  borderRadius="full"
                  w={["56px", "56px"]}
                  h={["56px", "56px"]}
                  boxSize="16"
                />
              </Box>
            </Box>
            <Text fontSize={["x-small", "md", "12px"]} fontWeight="medium">
              {slide.name}
            </Text>
          </Flex>
        ))}
      </div>
      {current === 0 ? (
        ""
      ) : (
        <Box
          cursor={["pointer"]}
          borderRadius={["full"]}
          boxShadow="2xl"
          onClick={prev}
          position={["absolute"]}
          top="10"
          sx={{ left: 1 }}
          zIndex="base"
          bgColor="white"
          display={["flex"]}
          alignItems={["center"]}
          justifyContent={["center"]}
        >
          <ChevronLeftIcon boxSize="7" />
        </Box>
      )}

      {current === 0 ? (
        <Box
          cursor={["pointer"]}
          borderRadius={["full"]}
          boxShadow="2xl"
          onClick={next}
          position={["absolute"]}
          top="10"
          right="1"
          zIndex="base"
          bgColor="white"
          display={["flex"]}
          alignItems={["center"]}
          justifyContent={["center"]}
        >
          <ChevronRightIcon boxSize="7" />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
