"use client";

import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { CiFlag1, CiPause1, CiPlay1, CiUndo } from "react-icons/ci";
import Timestamp from "./Timestamp";
import TableLaps from "./TableLaps";
import useStopwatch from "./useStopwatch";

export default function Stopwatch() {
  const { toggle, reset, running, time, save, laps } = useStopwatch();

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
        <Timestamp time={time} />
      </Flex>
      <Flex align="center" justify="center" gap={3} py={6} mb={10}>
        <Tooltip label="Reset" placement="top" hasArrow>
          <IconButton
            aria-label="Stop"
            colorScheme="gray"
            variant="outline"
            size="lg"
            icon={<CiUndo />}
            isRound
            onClick={reset}
          />
        </Tooltip>
        <Tooltip label={running ? "Pause" : "Play"} placement="top" hasArrow>
          <IconButton
            aria-label="Play"
            colorScheme="red"
            bg="red.500"
            size="xl"
            icon={
              running ? (
                <CiPause1 strokeWidth={1} color="white" />
              ) : (
                <CiPlay1 strokeWidth={1} color="white" />
              )
            }
            isRound
            onClick={toggle}
          />
        </Tooltip>
        <Tooltip label="Save lap" placement="top" hasArrow>
          <IconButton
            aria-label="Stop"
            colorScheme="gray"
            variant="outline"
            size="lg"
            icon={<CiFlag1 />}
            isRound
            onClick={save}
            isDisabled={!running}
          />
        </Tooltip>
      </Flex>
      <TableLaps />
    </Flex>
  );
}
