import React from "react";
import { StyleSheet } from "react-native";
import { Box, Header, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Graph from "./Graph/Graph";
import { data } from "./transactionData";

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  return (
    <Box flex={1}>
      <Header
        title="Transaction History"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box padding="m">
        <Text variant="header" color="secondary" opacity={0.3}>
          TOTAL SPENT
        </Text>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text variant="title1">$619,58</Text>
          <Box backgroundColor="primaryLight" borderRadius="m" padding="m">
            <Text color="primary">All Time</Text>
          </Box>
        </Box>
      </Box>
      <Box alignSelf="center">
        <Graph {...{ data }} />
      </Box>
    </Box>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({});
