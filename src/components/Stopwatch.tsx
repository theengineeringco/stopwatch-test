"use client";

import { Flex } from "@chakra-ui/react";
import { CiFlag1, CiPause1, CiPlay1, CiUndo } from "react-icons/ci";
import Timestamp from "./Timestamp";
import useStopwatch from "./useStopwatch";

export default function Stopwatch() {
  const control = useStopwatch();

  return (
    <Flex direction="column" mx="auto" mt={50} maxW={600} px={3}>
      <Flex
        fontFamily="mono"
        fontSize="xxx-large"
        fontWeight="hairline"
        textAlign="center"
        justify="center"
        lineHeight="100%"
        py={3}
      >
        <Timestamp time={control.time} />
      </Flex>
      <Flex align="center" justify="center" gap={3} py={6} mb={10}>
        {/* Controls here */}
      </Flex>
    </Flex>
  );
}
