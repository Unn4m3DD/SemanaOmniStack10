import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps'
import { getCurrentPositionAsync } from 'expo-location';
import { askAsync, LOCATION } from 'expo-permissions';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from "@expo/vector-icons"
export default function App({ navigation }) {
  const [location, setLocation] = useState(null);
  const checkLocation = async () => {
    const { status } = await askAsync(LOCATION);
    if (status !== 'granted')
      return;
    const { coords } = await getCurrentPositionAsync({
      enableHighAccuracy: true
    });
    const { longitude, latitude } = coords;
    const location = {
      longitude,
      latitude,
      latitudeDelta: 0.04,
      longitudeDelta: 0.04,
    }
    setLocation(location);
  }
  useEffect(() => {
    checkLocation()
  }, [])
  if (!location)
    return (<></>)
  return (
    <><MapView initialRegion={location} style={{ flex: 1 }}>
      <Marker coordinate={location} style={[]}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={{ uri: "https://avatars3.githubusercontent.com/u/4108718?s=400&v=4" }} />
        </View>
        <Callout onPress={() => { navigation.navigate("GitHubProfile", { gitHubName: "Unn4m3DD" }) }}>
          <View style={{ width: 200, height: 100 }}>
            <Text style={styles.name}>Andre</Text>
            <Text style={styles.techs}>NodeJS, React</Text>
            <Text
              numberOfLines={3}
              style={styles.bio}>
              {"Grandes bios bue fixes que t^em de ser compridas as placeholders por isso siga escrever que nem um doente kmn"}
            </Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
      <View style={styles.bar}>
        <TextInput style={styles.textInput}></TextInput>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="my-location" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#FFF",
    height: 50,
    borderRadius: 25,
    flex: 1,
    paddingHorizontal: 20,
    marginRight: 5,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#2fa1fa",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  bar: {
    position: "absolute",
    top: 20,
    right: 20,
    left: 20,
    flexDirection: "row",
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold"
  },
  techs: {
    fontSize: 14,
    color: "#bbb",
  },
  bio: { fontSize: 15 },
  iconContainer: {
    flex: 1,
    backgroundColor: "#aaa",
    height: 75,
    width: 75,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  icon: {
    height: 70,
    width: 70,
    borderRadius: 10,
  }
})

