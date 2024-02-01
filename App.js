import { SafeAreaView, StyleSheet, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {

  const charmanderData = {
    name: "Eevee",
    image: require("./assets/Eevee.png"),
    type: "grass",
    hp: 39,
    moves: ["Attack", "Growl", "Speed"],
    weaknesses: ["Water", "Rock"],
  };

  const flareonData = {
    name: "flareon",
    image: require("./assets/Flareon.png"),
    type: "fire",
    hp: 40,
    moves: ["Attack", "Special Attack", "Special Defense"],
    weaknesses: ["Fire"],
  };

  const joitenData = {
    name: "flareon",
    image: require("./assets/Joiten.png"),
    type: "electric",
    hp: 35,
    moves: ["Speed", "Special Attack", "Special Defense"],
    weaknesses: ["Rock"],
  };

  const vaporeonData = {
    name: "vaporeon",
    image: require("./assets/Vaporeon.png"),
    type: "water",
    hp: 75,
    moves: ["Speed", "Special Attack", "Special Defense"],
    weaknesses: ["water"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <PokemonCard {...charmanderData} />
        <PokemonCard {...flareonData} />
        <PokemonCard {...joitenData} />
        <PokemonCard {...vaporeonData} />
      </ScrollView>
    </SafeAreaView>

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  }
})