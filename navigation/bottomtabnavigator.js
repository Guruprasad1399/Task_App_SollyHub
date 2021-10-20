import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskScreen from "../Screens/TaskScreen";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, Pressable } from "react-native";
import styles from "../Screens/TaskScreen/styles";
import Menu from "../Menu";
import Jobs from "../Jobs";
import Wallet from "../Wallet";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const CustomTabBarButton = ({ children }) => {
    return (
      <TouchableOpacity
        style={{
          top: -30,
          justifyContent: "center",
          alignItems: "center",
          ...styles.shadow,
        }}
      >
        <View
          style={{
            width: 55,
            height: 55,
            borderRadius: 27.5,
            backgroundColor: "#1B856F",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="My task"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#141515" },
        tabBarActiveTintColor: "#fff",
        headerShown: true,
        headerStyle: {
          backgroundColor: "#011A15",
        },
        headerTintColor: "#C7D6D6",
        style: {
          position: "absolute",
          bottom: 2,
        },
        headerLeft: () => (
          <Pressable>
            <Ionicons
              name="ios-chevron-back-outline"
              size={24}
              color="#C7D6D6"
            />
          </Pressable>
        ),
      }}
    >
      <Tab.Screen
        name={"Wallet"}
        component={Wallet}
        options={{
          tabBarIcon: () => <Entypo name="wallet" size={24} color="#556969" />,
        }}
      />
      <Tab.Screen
        name={"My task"}
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={24} color="#2DAF95" />
          ),
          tabBarLabel: "Tasks",
        }}
      />
      <Tab.Screen
        name={"Home"}
        component={() => <Text>sgfdgfd</Text>}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={30}
              color="#FAFAFA"
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name={"Jobs"}
        component={Jobs}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={30}
              color="#556969"
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Menu"}
        component={Menu}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-menu-outline" size={24} color="#556969" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
