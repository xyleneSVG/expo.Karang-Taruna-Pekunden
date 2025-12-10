import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { injectRawToken } from "@/utils/assignCookie";

export default function WebPage() {
  const SECRET = process.env.EXPO_PUBLIC_TOKEN_SECRET!;

  const injected = injectRawToken(SECRET);

  return (
    <WebView
      style={styles.container}
      source={{ uri: String(process.env.EXPO_PUBLIC_WEB_URL) }}
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
