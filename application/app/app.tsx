import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { getEncryptedToken } from "@/utils/encrypt";

export default function WebPage() {
  const MESSAGE = process.env.TOKEN_MESSAGE!;
  const SECRET = process.env.TOKEN_SECRET!;
  const IV = process.env.TOKEN_IV!;

  const injected = getEncryptedToken(MESSAGE, SECRET, IV);

  return (
    <WebView
      style={styles.container}
      source={{ uri: process.env.URL_WEB! }}
      injectedJavaScript={injected}
      sharedCookiesEnabled={true}
      thirdPartyCookiesEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
