import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavMenu = () => {
  return (
    <Menu>
      <MenuButton
        fontSize="md"
        variant="outline"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Connect
      </MenuButton>
      <MenuList>
        <MenuItem px="3" py="2">
          <Link w="100%" href="https://github.com/TendaiChikwiri" isExternal>
            GitHub
          </Link>
        </MenuItem>

        <MenuItem px="3" py="2">
          <Link w="100%" href="mailto:tfchikwiri@gmail.com" isExternal>
            Email
          </Link>
        </MenuItem>
        <MenuItem px="3" py="2">
          <Link w="100%" href="#Contact">
            Message
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            w="100%"
            href="https://drive.google.com/file/d/1ZIaleTFjS6BEpW7qpnc9Sj7f6eahbu_F/view?usp=sharing"
            isExternal
          >
            CV
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
