import { Button, useColorMode, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "light" ? "Dark Theme" : "Light Theme"}
      hasArrow
    >
      <Button
        onClick={toggleColorMode}
        variant="outline"
        sx={{
          transition: "all ease-out 1s",
        }}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Tooltip>
  );
};

export default Toggle;
