import {
  Box,
  Flex,
  GridItem,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

interface IconInstanceProps {
  className: string;
  name: string;
}

const IconInstance = ({ className, name }: IconInstanceProps) => {
  return (
    <GridItem>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        pb={8}
        px={1}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          width={16}
          height={16}
        >
          <Box as="i" fontSize="3xl" className={className} />
        </Flex>
        <Tooltip label={name}>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray.500", "gray.400")}
            noOfLines={1}
            cursor="pointer"
            _hover={{
              color: useColorModeValue("gray.600", "gray.300"),
            }}
          >
            {name}
          </Text>
        </Tooltip>
      </Flex>
    </GridItem>
  );
};

export default IconInstance;
