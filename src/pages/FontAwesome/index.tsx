import { Box, Grid, Text, useColorModeValue } from "@chakra-ui/react";

import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/regular.css";

import IconInstance from "../../components/IconInstance";

import { icons } from "./icons";

const FontAwesomePage = () => {
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
          Take the hassle out of icons in your website.
        </Text>
        <Text fontSize="2xl" color={useColorModeValue("gray.500", "gray.400")}>
          Font Awesome is the Internet's icon library and toolkit, used by
          millions of designers, developers, and content creators.
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
            key={icon.objectID}
            className={`fa-${icon.style} fa-${icon.name}`}
            name={icon.name}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default FontAwesomePage;
