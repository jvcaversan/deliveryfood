import { Pressable, Text, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export function Header() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCity();
  }, []);

  async function getCity() {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setCity("Permissão negada");
      setLoading(false);
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      let cityName = address[0]?.city;
      setCity(cityName || "Cidade não encontrada");
    } catch (error) {
      setCity("Erro ao obter a localização");
    } finally {
      setLoading(false); // Termina o carregamento após a resposta
    }
  }

  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={20} color={"#121212"} />
      </Pressable>

      <View className="flex flex-col justify-center items-center">
        <Text className="text-center text-sm">Localização</Text>

        <View className="flex flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color={"#FF0000"} />
          <Text className="text-lg font-bold">{city}</Text>
        </View>
      </View>

      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Feather name="bell" size={20} color={"#121212"} />
      </Pressable>
    </View>
  );
}
