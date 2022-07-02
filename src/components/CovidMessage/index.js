import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        *Covid Message Here *Covid Message Here *Covid Message Here
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;