import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Linking } from "react-native";

export default function App() {
  const [initialURL, setInitialURL] = useState("");
  const [lastURL, setLastURL] = useState("");
  useEffect(() => {
    Linking.getInitialURL().then((value) => setInitialURL(value || ""));
    Linking.addEventListener("url", (event) => {
      setLastURL(event.url);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>INITIAL URL: {initialURL}</Text>
      <Text>LAST URL: {lastURL}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
