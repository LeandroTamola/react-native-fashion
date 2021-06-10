import React from "react";
import { StyleSheet, Image, FlatList, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Box, Header, Text } from "../../components";
import { Theme, makeStyles } from "../../components/Theme";
import { HomeNavigationProps } from "../../components/Navigation";
import Graph from "./Graph/Graph";
import Transaction from "./Transaction";
import { data } from "./transactionData";

const footerHeight = Dimensions.get("window").width / 4;
const aspectRatio = 4;
const startDate = new Date("2020-09-01").getTime();
const numberOfMonths = 7;

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  const styles = useStyles();
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Transaction History"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
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
        <Box alignSelf="center" flex={1}>
          <Graph data={data} {...{ startDate, numberOfMonths }} />
          <FlatList
            data={data}
            renderItem={Transaction}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      </ScrollView>
      <Box
        aspectRatio={aspectRatio}
        position="absolute"
        bottom={0}
        right={0}
        left={0}
      >
        <Image
          style={styles.footer}
          source={require("../../assets/patterns/pattern3.png")}
        />
      </Box>
    </Box>
  );
};

export default TransactionHistory;

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
    borderTopRightRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));
