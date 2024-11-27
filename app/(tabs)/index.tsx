import { Button, View } from "react-native";
import { TextInput } from "react-native";
import { Image } from "react-native";
import { useState } from "react";
import { Share } from "react-native";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  async function shareImage() {
    await Share.share({
      message: "Sending AI Generated QR Code",
      url: `https://api.qrserver.com/v1/create-qr-code/?data=${search}&size=512x512%22`,
    });
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
      <View style={{ backgroundColor: "#78B3CE", borderRadius: 10 }}>
        <TextInput
          value={search}
          placeholder="Search anything"
          style={{ color: "black", backgroundColor: "white", padding: 10 }}
          onChangeText={(text) => {
            setSearch(text);
          }}
        ></TextInput>
      </View>
      <Button title="Share" onPress={shareImage}></Button>
      <Image
        style={{
          width: 300,
          height: 300,
        }}
        source={{
          uri: `https://api.qrserver.com/v1/create-qr-code/?data=${search}&size=512x512`,
        }}
      />
    </View>
  );
}
