import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

import { Boxicons } from "../../components/Icons";
import { SectionLoader } from "../../components/Loader";

const IconsList = lazy(() => import("./IconsList"));

const BoxiconsPage = () => {
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
      <Suspense fallback={<SectionLoader />}>
        <IconsList />
      </Suspense>
    </Box>
  );
};

export default BoxiconsPage;
