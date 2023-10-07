import { stories } from "@/app/constants";
import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import Carousel from "./Carousel";

export default function Feed() {
  return (
    <Card overflow={["auto"]} bgColor={["white"]} mb="4" w={["full", "612px"]}>
      <Box>
        <Carousel slides={stories} />
        <Flex
          justifyContent={["space-between"]}
          alignItems={["center"]}
          py={["4", "0"]}
          px={["4", "6"]}
          mb={["0", "4"]}
        >
          <Flex flexDirection="row" alignItems={["center"]} gap={["10px"]}>
            <Box
              borderRadius="full"
              bgGradient="linear(to-b, #DE0046, #F7A34B)"
              p="2px"
            >
              <Box
                bgColor="white"
                height="full"
                width="full"
                borderRadius="full"
                p="2px"
              >
                <Image
                  src="/images/Profile-Pic-S.png"
                  alt="story"
                  borderRadius="full"
                  w={["32px", "32px"]}
                  h={["32px", "32px"]}
                />
              </Box>
            </Box>
            <Text fontSize={["12px", "md", "14px"]} fontWeight="medium">
              terrylucas
            </Text>
          </Flex>
          <Image
            src="/icons/ellipsis.png"
            alt="ellipsis icon"
            w="14px"
            h="14px"
          />
        </Flex>
      </Box>
      <Image src="/images/post-1.png" alt="terrylucas post" boxSize="" />
      <Flex
        my={["4"]}
        px={["4", "6"]}
        justifyContent={["space-between"]}
        alignContent={["center"]}
      >
        <Flex gap={["4"]} alignItems={["center"]}>
          <Image src="/icons/love.png" alt="love icon" w={["26px", "24px"]} />
          <Image
            src="/icons/comment.png"
            alt="love icon"
            w={["26px", "24px"]}
          />
          <Image
            src="/icons/share-posts.png"
            alt="love icon"
            w={["26px", "24px"]}
          />
        </Flex>
        <Image
          src="/icons/bookmark.png"
          alt="bookmark icon"
          w={["26px", "24px"]}
        />
      </Flex>
      <Box fontSize={["14px"]} mb={["20", "4"]} px={["4"]}>
        <Text fontWeight={["semibold"]}>1.069 likes</Text>
        <Text>
          <span className="font-semibold mr-2">terrylucas</span>
          Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti
          pellentesque... <span className="text-gray-500">more</span>
        </Text>
        <Text fontSize={["14px"]} color={["#8E8E8E"]} fontWeight={["normal"]}>
          View all 100 comments
        </Text>
        <Text
          fontSize={["14px"]}
          color={["#8E8E8E"]}
          fontWeight={["thin", "normal"]}
        >
          1 hour ago
        </Text>
      </Box>
    </Card>
  );
}
