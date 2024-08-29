import { View, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export function SearchInput() {
  return (
    <View className="w-full flex-row border border-black h-14 rounded-full items-center px-4 gap-2 bg-transparent">
      <Feather name="search" size={24} color={"#121212"} />
      <TextInput
        placeholder="Faça sua pesquisa"
        className="w-full flex-1 h-full bg-transparent"
      />
    </View>
  );
}
