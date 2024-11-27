import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Ionicons } from "@expo/vector-icons";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} color="#808080" name="qr-code-outline" />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">QR Code Generator</ThemedText>
      </ThemedView>
      <ThemedText>This is a QR code scanner made using react native</ThemedText>
      <Collapsible title="React Native">
        <ThemedText>
          React Native brings the best parts of developing with React to native
          development. It's a best-in-class JavaScript library for building user
          interfaces.
        </ThemedText>
        <ExternalLink href="https://reactnative.dev/">
          <ThemedText type="link">Learn More</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Expo">
        <ThemedText>
          Expo is an open-source platform for making universal native apps for
          Android, iOS, and the web with JavaScript and React.
        </ThemedText>
      </Collapsible>
      <Collapsible title="QR Code API">
        <ThemedText>
          This QR code generator was made with the help of an API with the link
          located below
        </ThemedText>
        <ExternalLink href="https://api.qrserver.com/v1/create-qr-code/?data=${search}&size=512x512`">
          <ThemedText type="link">API link</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Github & Git">
        <ThemedText>
          This QR code generator was hosted on github and git to make it
          viewable to the public.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{" "}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
          lets you inspect what the user's current color scheme is, and so you
          can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://github.com/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="VS code & Developer">
        <ThemedText>
          This generator was made using Visual Studio code. This website was
          made by Smaran who is 14 years old and is in grade 9.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The{" "}
              <ThemedText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </ThemedText>{" "}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
