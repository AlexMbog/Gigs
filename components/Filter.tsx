import { categories } from "@/constants";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
export default function CategoryTabs() {
  const [selected, setSelected] = useState("All");

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => setSelected(item)}
          className={`px-4 py-2 mr-2 rounded-full ${
            selected === item ? "bg-blue-500" : "bg-gray-700"
          }`}
        >
          <Text className="text-white font-medium">{item}</Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}
