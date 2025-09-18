import SearchBar from "@/components/Search";
import { gigs, musicians } from "@/constants";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1  bg-blue-400 mt-0">
      <View className="mt-2 items-center justify-center">
        <SearchBar />
      </View>
      <ScrollView>
        <View className="mt-2">
          <Text className="items-start pb-4 font-bold text-lg ml-2 ">
            Popular
          </Text>

          <FlatList
            horizontal
            data={musicians}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <View className="ml-2">
                  <Pressable className="items-center mr-2 ">
                    <Image
                      source={item.image}
                      className="w-20 h-20 rounded-full"
                    />
                    <Text className="text-blue-100">{item.name}</Text>
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
        <Text className="items-start pb-4 pt-4 font-bold text-lg ml-2 ">
          Latest
        </Text>
        <FlatList
          numColumns={3}
          data={gigs}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Pressable className="flex-1 m-2 bg-gray-800 rounded-xl overflow-hidden p-2">
                  <Image
                    source={item.image}
                    className="w-full h-32 rounded-lg"
                  />
                  <Text className="text-white mt-2 font-semibold">
                    {item.title}
                  </Text>
                  <Text className="text-gray-300">{item.subtitle}</Text>
                </Pressable>
              </View>
            );
          }}
        />
        <Text className="items-start pb-4 pt-4 font-bold text-lg ml-2 ">
          Featured Videos
        </Text>
        <FlatList
          numColumns={3}
          data={gigs}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Pressable className="flex-1 m-2 bg-gray-800 rounded-xl overflow-hidden p-2">
                  <Image
                    source={item.image}
                    className="w-full h-32 rounded-lg"
                  />
                  <Text className="text-white mt-2 font-semibold">
                    {item.title}
                  </Text>
                  <Text className="text-gray-300">{item.subtitle}</Text>
                </Pressable>
              </View>
            );
          }}
        />
      </ScrollView>
      <View></View>
    </SafeAreaView>
  );
}
