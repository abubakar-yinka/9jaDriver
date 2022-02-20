// import React, { useState, useEffect } from "react";
// import { View, Text, Dimensions, Pressable } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import MapViewDirections from 'react-native-maps-directions';
// import * as Location from 'expo-location';
// import Entypo from "react-native-vector-icons/Entypo";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import styles from './styles.js'
// import NewOrderPopup from "../../components/NewOrderPopup";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import * as Constants from "constants";
// import AppService from "../../services/app_service";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// const GOOGLE_MAPS_APIKEY = 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ';
// let STORAGE_KEY = "USER_DATA"


// const HomeScreen = () => {
//     // const [location, setLocation] = useState(null);
//     // const [errorMsg, setErrorMsg] = useState(null);
//     // const [car, setCar] = useState(null);
//     // const [myPosition, setMyPosition] = useState(null);
//     // const [order, setOrder] = useState(null)
//     // const [newOrders, setNewOrders] = useState([]);
//     // const userInfo = AsyncStorage.getItem(STORAGE_KEY)
//     // userInfo != null ? JSON.parse(userInfo) : null;
//     // console.log("UserInfo==", userInfo);
//     // let userData = JSON.parse(userInfo);

//     // const fetchMyCar = () => {
//     //     try {
//     //         AppService.fetchMyCar(userData?.data[0].userId).then(
//     //             response => {
//     //                 console.log(response);
//     //                 if (response.status === 'success') {
//     //                     setCar(response.data);
//     //                 }
//     //             }
//     //         )
//     //     } catch (e) {
//     //         console.error(e)
//     //     }
//     // }

//     // const fetchNewOrders = () => {
//     //     try {
//     //         AppService.fetchNewOrders().then(
//     //             response => {
//     //                 console.log(response);
//     //                 if (response.status === 'success') {
//     //                     setNewOrders(response.data);
//     //                 }
//     //             }
//     //         )
//     //     } catch (e) {
//     //         console.log(e);
//     //     }
//     // }

//     // useEffect(() => {
//     //     getMyLocation();
//     //     fetchMyCar();
//     //     fetchNewOrders();
//     // }, []);

//     // const onDecline = () => {
//     //     setNewOrders(newOrders.slice(1));
//     // }
//     // const onAccept = async (newOrder) => {
//     //     console.log("newOrders = =", newOrder)
//     //     try {
//     //         const input = {
//     //             id: newOrder.orderId,
//     //             status: "PICKING_UP_CLIENT",
//     //             carId: car.carId
//     //         }
//     //         AppService.updateOrder(input).then(
//     //             response => {
//     //                 console.log(response);
//     //                 if (response.status === 'success') {
//     //                     setOrder(response.data);
//     //                 } else {

//     //                 }
//     //             }
//     //         )
//     //     } catch (e) {
//     //         console.error(e)
//     //     }
//     //     setNewOrders(newOrders.slice(1));
//     // }

//     // const onGoPress = async () => {
//     //     // Update the car and set it to active
//     //     try {
//     //         const userData = await AsyncStorage.getItem(STORAGE_KEY);
//     //         const input = {
//     //             id: userData.attributes.user_id,
//     //             isActive: !car.isActive,
//     //         }
//     //         AppService.updateCarData(input).then(
//     //             response => {
//     //                 console.log(response);
//     //                 if (response.status === 'success') {
//     //                     setCar(response.data)
//     //                 } else {

//     //                 }
//     //             }
//     //         )
//     //     } catch (e) {
//     //         console.error(e);
//     //     }
//     // }

//     // const onUserLocationChange = async (event) => {
//     //     const {latitude, longitude, heading} = event.nativeEvent.coordinate
//     //     // Update the car and set it to active
//     //     try {
//     //         const userData = await AsyncStorage.getItem(STORAGE_KEY);
//     //         const input = {
//     //             id: userData.attributes.user_id,
//     //             latitude,
//     //             longitude,
//     //             heading,
//     //         }
//     //         AppService.updateCarData(input).then(
//     //             response => {
//     //                 console.log(response);
//     //                 if (response.status === 'success') {
//     //                     setCar(response.data)
//     //                 } else {

//     //                 }
//     //             }
//     //         )
//     //     } catch (e) {
//     //         console.error(e);
//     //     }
//     // }

//     // const onDirectionFound = (event) => {
//     //     console.log("Direction found: ", event);
//     //     if (order) {
//     //         setOrder({
//     //             ...order,
//     //             distance: event.distance,
//     //             duration: event.duration,
//     //             // pickedUp: order.pickedUp || event.distance < 0.2,
//     //             // isFinished: order.pickedUp && event.distance < 0.2,
//     //         })
//     //     }
//     // }

//     // const getDestination = () => {
//     //     if (order && order.pickedUp) {
//     //         return {
//     //             latitude: order.destLatitude,
//     //             longitude: order.destLongitude,
//     //         }
//     //     }
//     //     return {
//     //         latitude: order.originLatitude,
//     //         longitude: order.oreiginLongitude,
//     //     }
//     // }

//     // const renderBottomTitle = () => {
//     //     if (order && order.isFinished) {
//     //         return (
//     //             <View style={{alignItems: 'center'}}>
//     //                 <View style={{
//     //                     flexDirection: 'row',
//     //                     alignItems: 'center',
//     //                     justifyContent: 'center',
//     //                     backgroundColor: '#cb1a1a',
//     //                     width: 200,
//     //                     padding: 10,
//     //                 }}>
//     //                     <Text style={{color: 'white', fontWeight: 'bold'}}>COMPLETE {order.type}</Text>
//     //                 </View>
//     //                 <Text style={styles.bottomText}>{order.user.username}</Text>
//     //             </View>
//     //         )
//     //     }

//     //     if (order && order.pickedUp) {
//     //         return (
//     //             <View style={{alignItems: 'center'}}>
//     //                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
//     //                     <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
//     //                     <View style={{
//     //                         backgroundColor: '#d41212',
//     //                         marginHorizontal: 10,
//     //                         width: 30,
//     //                         height: 30,
//     //                         alignItems: 'center',
//     //                         justifyContent: 'center',
//     //                         borderRadius: 20
//     //                     }}>
//     //                         <FontAwesome name={"user"} color={"white"} size={20}/>
//     //                     </View>
//     //                     <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
//     //                 </View>
//     //                 <Text style={styles.bottomText}>Dropping off {order?.user?.username}</Text>
//     //             </View>
//     //         )
//     //     }

//     //     if (order) {
//     //         return (
//     //             <View style={{alignItems: 'center'}}>
//     //                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
//     //                     <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
//     //                     <View style={{
//     //                         backgroundColor: '#1e9203',
//     //                         marginHorizontal: 10,
//     //                         width: 30,
//     //                         height: 30,
//     //                         alignItems: 'center',
//     //                         justifyContent: 'center',
//     //                         borderRadius: 20
//     //                     }}>
//     //                         <FontAwesome name={"user"} color={"white"} size={20}/>
//     //                     </View>
//     //                     <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
//     //                 </View>
//     //                 <Text style={styles.bottomText}>Picking up {order?.user?.username}</Text>
//     //             </View>
//     //         )
//     //     }
//     //     if (car?.isActive) {
//     //         return (
//     //             <Text style={styles.bottomText}>You're online</Text>
//     //         )
//     //     }
//     //     return (<Text style={styles.bottomText}>You're offline</Text>);
//     // }

//     // const getMyLocation = () => {
//     //     (async () => {
//     //         if (Platform.OS === 'android' && !Constants.isDevice) {
//     //             setErrorMsg(
//     //                 'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
//     //             );
//     //             return;
//     //         }
//     //         let {status} = await Location.requestForegroundPermissionsAsync();
//     //         if (status !== 'granted') {
//     //             setErrorMsg('Permission to access location was denied');
//     //             return;
//     //         }
//     //         let location = await Location.getCurrentPositionAsync({});
//     //         let region = {
//     //             latitude: location.coords.latitude,
//     //             longitude: location.coords.longitude,
//     //             latitudeDelta: 0.0222,
//     //             longitudeDelta: 0.0121,
//     //         };
//     //         setLocation(region);
//     //         console.log(region)
//     //     })();
//     // }

//     return (
//         // <View>
//         //     <MapView
//         //         style={{width: '100%', height: Dimensions.get('window').height - 150}}
//         //         provider={PROVIDER_GOOGLE}
//         //         showsUserLocation={true}
//         //         // onUserLocationChange={onUserLocationChange}
//         //         // initialRegion={location}
//         //     >
//         //         {order && (
//         //             <MapViewDirections
//         //                 origin={{
//         //                     latitude: car?.latitude,
//         //                     longitude: car?.longitude,
//         //                 }}
//         //                 // onReady={onDirectionFound}
//         //                 // destination={getDestination()}
//         //                 apikey={GOOGLE_MAPS_APIKEY}
//         //                 strokeWidth={5}
//         //                 strokeColor="black"
//         //             />
//         //         )}
//         //     </MapView>

//         //     <Pressable
//         //         onPress={() => console.warn('Balance')}
//         //         style={styles.balanceButton}>
//         //         <Text style={styles.balanceText}>
//         //             <Text style={{color: '#009966', fontFamily: 'FilsonPro-Bold'}}>₦</Text>
//         //             {' '}
//         //             0.00
//         //         </Text>
//         //     </Pressable>

//         //     <Pressable
//         //         onPress={() => console.warn('Hey')}
//         //         style={[styles.roundButton, {top: 10, left: 10}]}>
//         //         <Entypo name={"menu"} size={24} color="#4a4a4a"/>
//         //     </Pressable>

//         //     <Pressable
//         //         onPress={() => console.warn('Hey')}
//         //         style={[styles.roundButton, {top: 10, right: 10}]}>
//         //         <Entypo name={"menu"} size={24} color="#4a4a4a"/>
//         //     </Pressable>

//         //     <Pressable
//         //         onPress={() => console.warn('Hey')}
//         //         style={[styles.roundButton, {bottom: 110, left: 10}]}>
//         //         <Entypo name={"menu"} size={24} color="#4a4a4a"/>
//         //     </Pressable>

//         //     <Pressable
//         //         onPress={() => console.warn('Hey')}
//         //         style={[styles.roundButton, {bottom: 110, right: 10}]}>
//         //         <Entypo name={"menu"} size={24} color="#4a4a4a"/>
//         //     </Pressable>

//         //     <Pressable
//         //         onPress={onGoPress}
//         //         style={styles.goButton}>
//         //         <Text style={styles.goText}>
//         //             {car?.isActive ? 'END' : 'GO'}
//         //         </Text>
//         //     </Pressable>

//         //     <View style={styles.bottomContainer}>
//         //         <Ionicons name={"options"} size={30} color="#4a4a4a"/>
//         //         {renderBottomTitle()}
//         //         <Entypo name={"menu"} size={30} color="#4a4a4a"/>
//         //     </View>

//         //     {newOrders.length > 0 && !order && <NewOrderPopup
//         //         newOrder={newOrders[0]}
//         //         duration={2}
//         //         distance={0.5}
//         //         onDecline={onDecline}
//         //         onAccept={() => onAccept(newOrders[0])}
//         //     />}
//         // </View>
//         // <View>
//         //     <Text>Home Screen</Text>
//         // </View>
//     );
// };

// export default HomeScreen;

import React, { useState } from 'react'
import { Text, View, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles.js'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../../components/NavOptions'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../../slices/navSlice'
import NavFavorites from "../../components/NavFavorites";

const HomeScreen = () => {
    // const [origin, setOrigin] = useState('')
    // const [destination, setDestination] = useState('')
    const dispatch = useDispatch();

    return (
        <SafeAreaView>
            <View style={tw`p-3`}>
                <Image 
                    style={{
                        width:100, 
                        height:100, 
                        resizeMode: 'contain'
                    }}
                    source={require('../../assets/images/logo_taxi.jpg')}
                />
                <GooglePlacesAutocomplete
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    placeholder="Where from?"
                    enablePoweredByContainer={false}
                    minLength={2}
                    returnKeyType={"search"}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        console.log(details.geometry.location)
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }));
                        dispatch(setDestination(null));
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    styles={{
                        container: {
                        flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                />
                <NavOptions />
                <NavFavorites shouldSetOrigin />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

// const styles = StyleSheet.create({})

