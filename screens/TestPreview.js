import React from "react";
import { View, Text } from "react-native";

export default function TestScreen({route}) {
    const { testData } = route.params;
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Welcome Test Screen - testData is {String(testData)}</Text>

        </View>
    );
}