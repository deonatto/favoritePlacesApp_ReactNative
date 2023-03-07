import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import { GlobalStyles } from "./constants/colors";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: GlobalStyles.colors.gray700,
            contentStyle: {backgroundColor: GlobalStyles.colors.gray700}
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your favorite places",
              headerTitleAlign: "center",
              headerRight: ({ tintColor }) => (
                <IconButton
                  name="add"
                  color={tintColor}
                  size={24}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{ title: "Add a new place", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{ title: "Map", headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
