import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

import { SectionLoader } from "../../components/Loader";

const IconsList = lazy(() => import("./IconsList"));

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
      <Suspense fallback={<SectionLoader />}>
        <IconsList />
      </Suspense>
    </Box>
  );
};

export default FontAwesomePage;
