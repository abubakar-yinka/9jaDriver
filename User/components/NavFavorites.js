import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {
    selectOrigin,
    setDestination,
    setOrigin,
} from "../slices/navSlice";
import { useDispatch, useSelector } from "react-redux";

import { HomeScreenProp } from "./NavOptions";
import { Icon } from "react-native-elements";
import { Point } from "react-native-google-places-autocomplete";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const data = [
  // {
  //   id: "234",
  //   icon: "home",
  //   name: "Current Location",
  //   location: { lat: 7.443298899999999, lng: 3.9003428 },
  //   description: "Your Current Location",
  // },
  {
    id: "234",
    icon: "home",
    name: "Home",
    location: { lat: 7.443298899999999, lng: 3.9003428 },
    description: "University of Ibadan",
  },
  {
    id: "567",
    icon: "briefcase",
    name: "Work",
    location: { lat: 37.387474, lng: -122.0575434 },
    description: "Silicon Valley, CA, USA",
  },
];

const NavFavorites = ({ shouldSetOrigin }) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  return (
    <FlatList
      data={data.filter(
        // Checks to see if Home or Work is already selected
        (item) => shouldSetOrigin || origin?.location !== item.location
      )}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={[
            tw`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
      )}
      renderItem={({ item: { name, icon, location, description } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            if (shouldSetOrigin) {
              dispatch(
                setOrigin({
                  location,
                  description,
                })
              );
              navigation.navigate("MapScreen");
            } else {
              dispatch(
                setDestination({
                  location,
                  description,
                })
              );
            }
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{name}</Text>
            <Text style={tw`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;
