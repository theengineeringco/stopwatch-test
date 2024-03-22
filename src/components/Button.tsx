import { IconButton, IconButtonProps, Tooltip } from "@chakra-ui/react";

export const PrimaryButton = (props: IconButtonProps) => {
  return (
    <Tooltip label={props["aria-label"]} placement="top" hasArrow>
      <IconButton colorScheme="red" bg="red.500" size="xl" isRound {...props} />
    </Tooltip>
  );
};

export const SecondaryButton = (props: IconButtonProps) => {
  return (
    <Tooltip label={props["aria-label"]} placement="top" hasArrow>
      <IconButton
        colorScheme="gray"
        variant="outline"
        size="lg"
        isRound
        {...props}
      />
    </Tooltip>
  );
};
