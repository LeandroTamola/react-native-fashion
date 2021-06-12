import React from "react";
import {
  Box,
  Button,
  makeStyles,
  Text,
  Theme,
  useTheme,
} from "../../components";

interface SubSlideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <Box
      flex={1}
      justifyContent="space-evenly"
      alignItems="center"
      style={{ padding: 44 }}
    >
      <Box justifyContent="center" alignItems="center">
        <Text variant="title2">{subtitle}</Text>
        <Text variant="body" style={styles.description}>
          {description}
        </Text>
      </Box>
      <Button
        label={!last ? "Next" : "Let's get started"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </Box>
  );
};

export default SubSlide;

const useStyles = makeStyles((theme: Theme) => ({
  description: {
    textAlign: "center",
    marginBottom: theme.spacing.s,
  },
}));
