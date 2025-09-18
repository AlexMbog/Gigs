import { images } from "@/constants";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
export default function SearchBar() {
  return (
    <View className="w-[346px] h-14 flex-row items-center border rounded-lg px-3 py-2 bg-blue-400 m-2">
      <TextInput
        className="flex-1"
        placeholder="search"
        placeholderTextColor="blue-100"
      />
      <TouchableOpacity
        className="pr-5"
        onPress={() => console.log("Search pressed")}
      >
        <Image
          source={images.search}
          className=" w-6 h-6 ml-2"
          resizeMode="contain"
          tintColor="#5D5F6D"
        />
      </TouchableOpacity>
    </View>
  );
}
