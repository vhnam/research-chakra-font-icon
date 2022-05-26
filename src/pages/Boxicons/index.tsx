import { Box, Grid, Text, useColorModeValue } from "@chakra-ui/react";

import IconInstance from "../../components/IconInstance";
import { Boxicons } from "../../components/Icons";

import { icons } from "./icons";

const BoxiconsPage = () => {
  const getPrefix = (type: string) => {
    switch (type) {
      case "SOLID":
        return "bxs";
      case "REGULAR":
        return "bx";
      case "LOGO":
        return "bxl";
      default:
        return "bx";
    }
  };

  return (
    <Box
      px={{
        base: 4,
        xl: 0,
      }}
      mx="auto"
      maxWidth={{
        sm: "33.75rem",
        md: "45rem",
        lg: "60rem",
        xl: "71.25rem",
      }}
    >
      <Box my={12} textAlign="center">
        <Box
          display="inline-block"
          mb={4}
          color={useColorModeValue("gray.900", "white")}
        >
          <Boxicons width="10rem" />
        </Box>
        <Text
          as="h1"
          mb={{
            base: 2,
            lg: 1,
          }}
          fontFamily="heading"
          fontSize="5xl"
          fontWeight="bold"
          color={useColorModeValue("gray.900", "white")}
        >
          High Quality Web Icons
        </Text>
        <Text fontSize="2xl" color={useColorModeValue("gray.500", "gray.400")}>
          Simple Open Source icons carefully crafted for designers &amp;
          developers
        </Text>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(3,minmax(3rem,1fr))",
          md: "repeat(4,minmax(4rem,1fr))",
          lg: "repeat(8,minmax(4.5rem,1fr))",
        }}
        gap={2}
        my={24}
      >
        {icons.map((icon) => (
          <IconInstance
            key={icon._id}
            className={`bx ${getPrefix(icon.type_of_icon)}-${icon.name}`}
            name={icon.name}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default BoxiconsPage;
