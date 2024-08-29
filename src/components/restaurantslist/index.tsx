import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { CardVerticalRestaurants } from "./list";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantsList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.27.105:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }

    getRestaurants();
  }, []);

  return (
    <View className="px-4 flex-1 w-full h-full mb-20 gap-4">
      {restaurants.map((item) => (
        <CardVerticalRestaurants key={item.id} restaurant={item} />
      ))}
    </View>
  );
}
