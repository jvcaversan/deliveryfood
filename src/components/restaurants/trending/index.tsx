import { Image, Pressable, Text, View } from "react-native";

import { RestaurantsProps } from "..";

export function CardHorizontalRestaurants({
  restaurants,
}: {
  restaurants: RestaurantsProps;
}) {
  return (
    <Pressable className="flex flex-col justify-center items-center">
      <Image
        source={{ uri: restaurants.image }}
        className="w-28 h-28 rounded-full"
      />

      <Text
        className="text-black mt-2 text-sm font-bold text-center leading-4 max-w-[112px]"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {restaurants.name}
      </Text>
    </Pressable>
  );
}
