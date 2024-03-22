"use client";

import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Timestamp from "./Timestamp";
import { memo } from "react";

function TableLaps() {
  return (
    <Box>
      <TableContainer
        overflowY="auto"
        maxH={500}
        position="relative"
        borderRadius="3px 3px 0 0"
      >
        <Table variant="simple">
          <Thead position="sticky" top={0} bg="gray.700">
            <Tr>
              <Th width={5}>#</Th>
              <Th>Lap Time</Th>
              <Th>Elapsed Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight={800}>1</Td>
              <Td>
                <Timestamp time={0} />
              </Td>
              <Td>
                <Timestamp time={0} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default memo(TableLaps);
