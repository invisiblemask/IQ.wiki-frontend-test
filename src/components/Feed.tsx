import { stories } from "@/app/constants";
import { Card } from "@chakra-ui/react";
import Carousel from "./Carousel";
import PostCard from "./PostCard";

export default function Feed() {
  return (
    <Card
      overflow={["auto"]}
      bgColor={["white"]}
      mb={["4", "10", "20", "4"]}
      w={["full", "612px"]}
    >
      <Carousel slides={stories} />
      <PostCard />
    </Card>
  );
}
