import { Grid } from "@chakra-ui/react";

import "boxicons/css/boxicons.min.css";

import IconInstance from "../../components/IconInstance";

import { icons } from "./icons";
import { getPrefix } from "./utils";

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
        key={icon._id}
        className={`bx ${getPrefix(icon.type_of_icon)}-${icon.name}`}
        name={icon.name}
      />
    ))}
  </Grid>
);

export default IconsList;
