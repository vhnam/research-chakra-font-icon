import { Flex, Spinner } from "@chakra-ui/react";

const SectionLoader = () => (
  <Flex alignItems="center" justifyContent="center" width="100%">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Flex>
);

export default SectionLoader;
