import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function Tabslayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1A2B60",
          height: 80,
        },
        headerTintColor: "#C1CFDA",
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: "#0D1530",
          borderTopWidth: 0,
          height: 90,
        },
        tabBarActiveTintColor: "#C1CFDA",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tabs.Screen
        name="home"
   
        options={{
          title: "Home",
           headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
            
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "discover",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color }) => (
            <AntDesign name="plussquareo" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "messages",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
