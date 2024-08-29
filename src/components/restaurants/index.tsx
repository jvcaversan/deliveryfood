import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { CardHorizontalRestaurants } from "./trending";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
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
    <FlatList
      data={restaurants}
      renderItem={({ item }) => (
        <CardHorizontalRestaurants restaurants={item} />
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10, paddingLeft: 16, paddingRight: 16 }}
    />
  );
}
