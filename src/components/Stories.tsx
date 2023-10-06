import { stories } from "@/app/constants";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Stories() {
  return (
    <Box
      mt={["16", "0"]}
      overflow="auto"
      display={["block", "none"]}
      borderBottom="1px"
      borderColor="gray.100"
      pb={["3"]}
    >
      <Flex
        gap="2"
        overflowX="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        justifyContent={["start", "center"]}
      >
        {stories.map((story, index) => (
          <Flex
            key={index}
            flexDirection="column"
            gap="2px"
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
                  src={story.image}
                  alt="story"
                  borderRadius="full"
                  w={["14", "56px"]}
                  h={["14", "56px"]}
                  objectFit="cover"
                />
              </Box>
            </Box>
            <Text fontSize={["x-small", "md", "12px"]} fontWeight="medium">
              {story.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
