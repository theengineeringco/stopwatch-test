"use client";

import { Box, Flex } from "@chakra-ui/react";
import { format } from "date-fns";

type StopwatchProps = {
  time: number;
};
export default function Timestamp({ time = 0 }: StopwatchProps) {
  return (
    <Flex lineHeight="100%">
      <Box>{format(time, "mm")}</Box>
      <Box fontFamily="body">:</Box>
      <Box>{format(time, "ss")}</Box>
    </Flex>
  );
}
