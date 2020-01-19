import React from 'react';
import { WebView } from 'react-native-webview';
export default function App({ navigation }) {
  return (
    <WebView source={{ uri: `https://www.github.com/${navigation.getParam("gitHubName")}` }} />
  );
}

