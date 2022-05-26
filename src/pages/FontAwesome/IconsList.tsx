import { Grid } from "@chakra-ui/react";

import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/regular.css";

import IconInstance from "../../components/IconInstance";

import { icons } from "./icons";

const IconsList = () => (
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
);

export default IconsList;
