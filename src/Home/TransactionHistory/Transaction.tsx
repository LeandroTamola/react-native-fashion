import React from "react";
import moment from "moment";
import { Box, Text } from "../../components";
import { DataPoint } from "./Graph";

interface TransactionProps {
  item: DataPoint;
}
const Transaction = ({ item }: TransactionProps) => {
  const transaction = item;
  return (
    <Box
      marginVertical="l"
      paddingHorizontal="s"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Box flexDirection="row" alignItems="center" marginBottom="s">
          <Box
            backgroundColor={transaction.color}
            marginRight="s"
            style={{ width: 10, height: 10, borderRadius: 5 }}
          />
          <Text variant="body">#{transaction.id}</Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <Text color="info">
            {`$${transaction.total} - ${moment(transaction.date)
              .utc()
              .format("DD MMMM, YYYY")}`}
          </Text>
        </Box>
      </Box>
      <Text variant="button">See more</Text>
    </Box>
  );
};

export default Transaction;
