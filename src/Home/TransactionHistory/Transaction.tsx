import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Box, Text } from "../../components";
import { DataPoint } from "./Graph";

interface TransactionProps {
  transaction: DataPoint;
}
const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <Box marginVertical="l" paddingHorizontal="s">
      <Box flexDirection="row" alignItems="center">
        <Box
          backgroundColor={transaction.color}
          marginRight="s"
          style={{ width: 10, height: 10, borderRadius: 5 }}
        />
        <Text variant="body" marginBottom="s" color="secondary">
          #{transaction.id}
        </Text>
      </Box>
      <Box flexDirection="row" justifyContent="space-between">
        <Text>
          ${transaction.total} - {transaction.date}
        </Text>
        <Text variant="body">See more</Text>
      </Box>
    </Box>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
