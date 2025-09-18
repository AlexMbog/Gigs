import { HeaderProps } from "@/type";
import { Text, View } from "react-native";
export default function CutomHeader({
  title,
  showBackButton,
  onBackPress,
}: HeaderProps) {
  return (
    <View className="w-full bg-blue-200 p-4 items-center">
      <Text className="text-blue-400 font-bold text-lg">{title}</Text>
    </View>
  );
}
