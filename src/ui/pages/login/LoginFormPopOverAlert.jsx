import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function LoginFormPopOverAlert({
  children,
  popOverAlertText,
  isOpen,
  onClose,
}) {
  const highlight = useColorModeValue("gray.200", "dark.200");
  return (
    <Popover
      returnFocusOnClose={false}
      autoFocus={false}
      isOpen={isOpen}
      onClose={onClose}
      placement="top-end"
      closeOnBlur={false}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent bg={highlight} w="fit-content">
        <PopoverArrow bg={highlight} />
        <PopoverBody fontSize={{ base: "0.75em", lg: "1em" }}>
          {<ChevronRightIcon mr="1" />}
          {popOverAlertText}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default LoginFormPopOverAlert;
