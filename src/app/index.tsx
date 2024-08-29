import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/header";

import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { SearchInput } from "../components/input";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trendingFoods";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-300"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <SearchInput />
      </View>

      <Section
        name="Comidas em Alta"
        size="text-2xl"
        label="Veja todas"
        action={() => console.log(" clicou no veja mais ")}
      />

      <TrendingFoods />
    </ScrollView>
  );
}
