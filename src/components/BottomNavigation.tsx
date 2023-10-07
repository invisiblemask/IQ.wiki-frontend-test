import { icons } from "@/app/constants";
import { Box, Center, Flex, Image, Spacer } from "@chakra-ui/react";

export default function BottomNavigation() {
  return (
    <Box
      borderTop="1px solid"
      borderColor="gray.100"
      position="fixed"
      bottom={0}
      w="100%"
      py="4"
      px="6"
      bgColor="white"
      display={["block", "block", "none", "none"]}
    >
      <Flex justifyContent="space-between" alignItems="center">
        {icons.map((icon, index) => (
          <Image key={index} src={icon.image} alt={icon.name} boxSize="25px" />
        ))}
        <Box
          height="35px"
          width="35px"
          border="2px"
          borderColor="gray.100"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/images/profile-img.png"
            alt="profile img"
            borderRadius="full"
            objectFit="cover"
            width="33px"
            height="33px"
          />
        </Box>
      </Flex>
    </Box>
  );
}
