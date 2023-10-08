import { suggestions } from "@/app/constants";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function HomeSide() {
  return (
    <Box display={["none", "none", "none", "block"]} py="4" width="320px">
      <Box
        gap="4"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
      >
        <Flex gap="4" alignItems="center">
          <Image
            src="/images/profile-img.png"
            alt="profile img"
            borderRadius="full"
            objectFit="cover"
            width="56px"
            height="56px"
          />
          <Flex flexDirection="column">
            <Text color="#262626" fontSize="14px">
              shirleyromero
            </Text>
            <Text color="#8E8E8E" fontSize="14px">
              Shirley romero
            </Text>
          </Flex>
        </Flex>
        <Box color="#0095F6" fontSize="12px">
          Switch
        </Box>
      </Box>

      <Flex justifyContent="space-between" mt="6" alignItems="center">
        <Text color="#8E8E8E" fontSize="14px">
          Suggestions For You
        </Text>
        <Box color="#262626" fontSize="12px">
          See All
        </Box>
      </Flex>
      <Flex flexDirection="column">
        {suggestions.map((suggestion, index) => (
          <Box
            key={index}
            gap="4"
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            mt="4"
          >
            <Flex gap="2" alignItems="center">
              <Image
                src={suggestion.image}
                alt="profile img"
                borderRadius="full"
                objectFit="cover"
                width="32px"
                height="32px"
              />
              <Flex flexDirection="column">
                <Text color="#262626" fontSize="14px">
                  {suggestion.name}
                </Text>
                <Text color="#8E8E8E" fontSize="12px">
                  {suggestion.text}
                </Text>
              </Flex>
            </Flex>
            <Box color="#0095F6" fontSize="12px">
              Follow
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
