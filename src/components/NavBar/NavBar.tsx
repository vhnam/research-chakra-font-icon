import {
  Box,
  Button,
  Flex,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={4}
        py={2}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Text
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          fontSize="2xl"
          color={useColorModeValue("gray.800", "white")}
        >
          Usage as a Font Icon
        </Text>
        <Stack alignItems="center" direction="row" spacing={4}>
          <Link
            as={RouterLink}
            to="/boxicons"
            _hover={{
              textDecoration: "none",
            }}
          >
            BoxIcons
          </Link>
          <Link
            as={RouterLink}
            to="/font-awesome"
            _hover={{
              textDecoration: "none",
            }}
          >
            Font Awesome
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
