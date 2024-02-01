import { View, Text, StyleSheet, Platform, Image } from "react-native"

const getTypeDetails = (type) => {
    switch (type) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "red", emoji: "🔥" };
        case "grass":
            return { borderColor: "#FF5733", emoji: "🍀" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❔" };
    }
};

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
    const { borderColor, emoji } = getTypeDetails(type);
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>
            <Image style={styles.image} resizeMode="contain" source={image} accessibilityLabel={`${name} pokemone`} />
            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.type}>{type}</Text>
                </View>
            </View>
            <View style={styles.movesContainer}>
                <Text>
                    Moves: {moves.join(",")}
                </Text>
            </View>
            <View style={styles.weaknessesContainer}>
                <Text style={styles.weaknesses}>
                    Weaknesses: {weaknesses.join(",")}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5
            }
        })
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 35,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    typeContainer: {
        alignItems: "center",
        marginBottom: 40
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 2,
        borderRadius: 20
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12
    },
    type: {
        fontSize: 22,
        fontWeight: "bold"
    },
    movesContainer: {
        marginBottom: 16
    },
    weaknessesContainer: {
        marginBottom: 8
    },
    weaknesses: {
        fontSize: 22,
        fontWeight: "bold",
        color: "red"
    }
})