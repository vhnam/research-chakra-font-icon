import { Flex, Spinner } from "@chakra-ui/react";

const PageLoader = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    minHeight="100vh"
    width="100%"
  >
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Flex>
);

export default PageLoader;
