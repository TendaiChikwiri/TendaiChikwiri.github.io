import { Button, useColorMode } from "@chakra-ui/react";

interface Props {}

const Toggle = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default Toggle;