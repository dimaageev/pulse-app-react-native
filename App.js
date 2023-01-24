import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";

const SIZE = 100;
const COLOR = "#f368e0";
const BACKGROUND_COLOR = "#ff9ff3";

export default function App() {
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(progress, { toValue: 1, useNativeDriver: true }),
          Animated.timing(progress, { toValue: 0.5, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.timing(scale, { toValue: 1.5, useNativeDriver: true }),
          Animated.timing(scale, { toValue: 1, useNativeDriver: true }),
        ]),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale }],
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.heart} />
        <View style={styles.heart} />
      </View>
      <View style={styles.bottom} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  heart: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLOR,
    marginBottom: SIZE - 17,
    marginHorizontal: -7,
  },
  bottom: {
    width: SIZE,
    height: SIZE,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: SIZE / 2,
    backgroundColor: COLOR,
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    position: "absolute",
  },
});
