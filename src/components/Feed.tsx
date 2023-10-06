import { Badge, Box, Card, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Carousel from "./Carousel";
import { stories } from "@/app/constants";

export default function Feed() {
  return (
    <Card overflow={["auto"]} bgColor={["white"]}>
      <Box w={["100%", "612px"]}>
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
            w={["16px", "20px"]}
            h={["16px", "20px"]}
            objectFit={["contain"]}
          />
        </Flex>
      </Box>
      <Image src="/images/post-1.png" alt="terrylucas post" />
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
        <Box gap={["1"]} display={["block", "flex"]} flexDirection={["row"]}>
          <Text fontWeight={["semibold"]}>terrylucas</Text>
          <Text textAlign={["start"]} fontWeight={["normal"]}>
            Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti
            pellentesque...
          </Text>
          <Text
            fontWeight={["normal"]}
            fontSize={["14px"]}
            color={["gray.500"]}
          >
            more
          </Text>
        </Box>
        <Text fontSize={["14px"]} color={["#8E8E8E"]}>
          View all 100 comments
        </Text>
        <Text fontSize={["14px"]} color={["#8E8E8E"]}>
          1 hour ago
        </Text>
      </Box>
    </Card>
  );
}
