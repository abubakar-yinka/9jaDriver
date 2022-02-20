import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


export const navData = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    // {
    //   id: "456",
    //   title: "Order Food",
    //   image: "https://links.papareact.com/28w",
    //   screen: "EatsScreen",
    // },
  ];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)
    return (
        <FlatList 
            data={navData}
            horizontal
            // style={tw`flex-row items-center`}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`pr-2 pl-6 pt-4 pb-8 bg-gray-200 mr-2 mb-5 w-40 rounded-md`}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && `opacity-20`}`}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-6`}
                            type="antdesign"
                            color="white"
                            name="arrowright"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

